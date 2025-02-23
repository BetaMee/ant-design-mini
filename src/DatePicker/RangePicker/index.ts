import { DateRangePickerDefaultProps } from './props';
import dayjs from 'dayjs';
import computed from '../../mixins/computed';
import equal from 'fast-deep-equal';
import {
  getRangeData,
  getDateByValue,
  getValueByDate,
  getValidValue,
  isEqualDate,
} from '../util';
import fmtEvent from '../../_util/fmtEvent';
import mixinValue from '../../mixins/value';

const component2 = my.canIUse('component2');

Component({
  mixins: [
    mixinValue({
      transformValue(value) {
        return {
          value:
            value && value[0] && value[1]
              ? [dayjs(value[0]).toDate(), dayjs(value[1]).toDate()]
              : undefined,
          needUpdate: true,
        };
      },
    }),
    computed,
  ],

  props: DateRangePickerDefaultProps,
  pickerVisible: false,
  data() {
    return {
      currentValue: [], // 当前picker选中值，didmount、弹窗打开、切换开始结束、picker变化时更新
      columns: [], // 当前可选项，didmound、弹窗打开、切换开始结束、picker变化时更新
      pickerType: 'start' as 'start' | 'end',
      currentStartDate: null, // 展开时开始时间，date格式，有value，则取value[0]，否则取当天，需要判断当天是否在可选范围内
      currentEndDate: null, // 展开时开始时间，date格式，有value，则取value[1]，否则取开始时间
      forceUpdate: 0, // 强制更新picker组件，已知需处理的情况：value超限，但是需要更新format，由于picker的参数均未变化，无法触发picker的渲染
    };
  },

  didMount() {
    this.pickerVisible = false;
  },
  deriveDataFromProps(nextProps) {
    this.updateValue(this.props, nextProps);
  },
  didUpdate(prevProps) {
    if (!component2) {
      this.updateValue(prevProps, this.props);
    }
  },
  methods: {
    updateValue(prevProps, currentProps) {
      if (
        !isEqualDate(prevProps.value?.[0], currentProps.value?.[0]) ||
        !isEqualDate(prevProps.value?.[1], currentProps.value?.[1])
      ) {
        this.setData({
          forceUpdate: this.data.forceUpdate + 1,
        });
        if (this.pickerVisible) {
          // 展开状态才更新picker的数据，否则下次triggerVisible触发
          this.setCurrentValue(currentProps);
        }
      }
    },
    computed() {
      const { currentStartDate, currentEndDate, pickerType } = this.data;
      const { format } = this.props;
      if (pickerType)
        return {
          currentStartValueStr: currentStartDate
            ? dayjs(currentStartDate).format(format)
            : '',
          currentEndValueStr: currentEndDate
            ? dayjs(currentEndDate).format(format)
            : '',
        };
    },
    getMin(min) {
      const { pickerType, currentStartDate, currentEndDate } = this.data;
      let realMin = min;
      if (pickerType === 'end') {
        if (currentStartDate) {
          realMin = currentStartDate;
        }
        if (
          currentStartDate &&
          min &&
          dayjs(currentStartDate).isAfter(dayjs(min as any))
        ) {
          realMin = currentStartDate;
        }
      }
      let res = realMin ? dayjs(realMin as any) : dayjs().subtract(10, 'year');
      // 从end切回start的情况，end取了打开时的十年前，min再取当前时间十年前会出现>max的情况
      if (currentEndDate && res.isAfter(currentEndDate)) {
        res = dayjs(currentEndDate);
      }
      return res;
    },

    getMax(max) {
      const { pickerType, currentEndDate } = this.data;
      let realMax = max;
      if (pickerType === 'start') {
        if (currentEndDate) {
          realMax = currentEndDate;
        }
        if (
          currentEndDate &&
          max &&
          dayjs(currentEndDate).isBefore(dayjs(max as any))
        ) {
          realMax = currentEndDate;
        }
      }
      return realMax ? dayjs(realMax as any) : dayjs().add(10, 'year');
    },
    // didUpdate、弹窗打开、切换pickerType触发
    setCurrentValue(currentProps) {
      const { pickerVisible } = this; // 隐藏状态下从CValue触发，展开状态使用当前数据
      const { precision } = currentProps;
      const { pickerType, columns } = this.data;
      const realValue = this.getValue();
      let { currentStartDate, currentEndDate } = this.data;
      const currentStartDateByCValue = realValue?.[0] || null;
      const currentEndDateByCValue = realValue?.[1] || null;

      // 展开状态，说明在切换pickerType
      if (pickerVisible) {
        if (pickerType === 'start') {
          // currentStartDate 无需变化
        } else {
          // pickerType=end start已存在
          // 结束时间默认选中开始
          if (!currentEndDate) {
            currentEndDate = currentStartDate;
          }
        }
      } else {
        // 否则是在从cValue初始化
        currentStartDate = currentStartDateByCValue;
        currentEndDate = currentEndDateByCValue;
        // 开始默认取优先取当前时间，不在时间范围内取开始时间
        if (!currentStartDate) {
          const min = this.getMin(currentProps.min).toDate();
          const { max } = currentProps;
          currentStartDate = new Date();
          if (
            (min && currentStartDate < min) ||
            (max && currentStartDate > max) ||
            (currentEndDateByCValue &&
              currentStartDate > currentEndDateByCValue)
          ) {
            currentStartDate = min;
          }
        }
      }
      const currentValue = getValueByDate(
        pickerType === 'start' ? currentStartDate : currentEndDate,
        precision
      );
      const newColumns = this.generateData(currentValue, currentProps);
      if (!equal(newColumns, columns)) {
        this.setData({ columns: newColumns }, () => {
          this.setData({ currentStartDate, currentEndDate, currentValue });
        });
      } else {
        this.setData({ currentStartDate, currentEndDate, currentValue });
      }
    },
    /**
     * 生成选项数据，didmound、picker change、打开弹窗、切换picker type触发
     */
    generateData(currentValue, currentProps) {
      const { precision, min: propsMin, max: propsMax } = currentProps;
      const min = this.getMin(propsMin);
      const max = this.getMax(propsMax);
      if (max < min) {
        return [];
      }
      let currentPickerDay = dayjs();
      if (currentValue.length > 0) {
        currentPickerDay = dayjs(getDateByValue(currentValue));
      }
      if (currentPickerDay < min || currentPickerDay > max) {
        currentPickerDay = min;
      }

      const newColumns = getRangeData(precision, min, max, currentPickerDay);
      return newColumns;
    },

    onChange(selectedIndex) {
      selectedIndex = getValidValue(selectedIndex);
      const { onPickerChange, format, precision } = this.props;
      let date = getDateByValue(selectedIndex);
      const min = this.getMin(this.props.min);
      const max = this.getMax(this.props.max);
      if (dayjs(date).isBefore(min)) {
        date = min.toDate();
        selectedIndex = getValueByDate(date, precision);
      }
      if (dayjs(date).isAfter(max)) {
        date = max.toDate();
        selectedIndex = getValueByDate(date, precision);
      }
      const { pickerType, columns } = this.data;
      const newData: any = {
        currentValue: selectedIndex,
      };
      if (pickerType === 'start') {
        newData.currentStartDate = date;
      } else {
        newData.currentEndDate = date;
      }
      const newColumns = this.generateData(selectedIndex, this.props);
      if (!equal(newColumns, columns)) {
        this.setData(
          {
            columns: newColumns,
          },
          () => {
            this.setData(newData);
            if (onPickerChange) {
              onPickerChange(
                pickerType,
                date,
                dayjs(date).format(format),
                fmtEvent(this.props)
              );
            }
          }
        );
      } else {
        this.setData(newData);
        if (onPickerChange) {
          onPickerChange(
            pickerType,
            date,
            dayjs(date).format(format),
            fmtEvent(this.props)
          );
        }
      }
    },

    onCancel(e) {
      const { onCancel } = this.props;
      if (onCancel) {
        onCancel(fmtEvent(this.props, e));
      }
    },

    onOk() {
      const { format } = this.props;
      const { currentStartDate, currentEndDate } = this.data;
      const realValue = [currentStartDate, currentEndDate] as any;
      if (!this.isControlled()) {
        this.update(realValue);
      }
      if (this.props.onOk) {
        this.props.onOk(
          realValue,
          realValue.map((v) => dayjs(v).format(format)),
          fmtEvent(this.props)
        );
      }
    },
    defaultFormat(date, valueStrs) {
      const { format, splitCharacter } = this.props;
      if (format && valueStrs && valueStrs[0] && valueStrs[1]) {
        return valueStrs.join(`${splitCharacter}`);
      }
      return '';
    },
    onFormat() {
      const { onFormat, format } = this.props;
      const realValue = this.getValue();
      const formatValueByProps =
        onFormat &&
        onFormat(
          realValue,
          realValue
            ? realValue.map((v) => (v ? dayjs(v).format(format) : null))
            : null
        );
      if (typeof formatValueByProps !== 'undefined') {
        return formatValueByProps;
      }
      return this.defaultFormat(
        realValue,
        realValue
          ? realValue.map((v) => (v ? dayjs(v).format(format) : null))
          : null
      );
    },
    /**
     * 显示/隐藏切换
     * @param visible
     */
    onVisibleChange(visible) {
      const { onVisibleChange } = this.props;
      if (visible) {
        this.setData({ pickerType: 'start' });
        this.setCurrentValue(this.props);
      }
      if (onVisibleChange) {
        onVisibleChange(visible, fmtEvent(this.props));
      }
      this.pickerVisible = visible;
    },
    onChangeCurrentPickerType(e) {
      const { type } = e.target.dataset;
      const { pickerType } = this.data;
      if (type !== pickerType) {
        this.setData({
          pickerType: type,
        });
        this.setCurrentValue(this.props);
      }
    },
  },
});
