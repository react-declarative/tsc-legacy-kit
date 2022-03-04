declare module "@date-io/core/IUtils" {
    export interface DateIOFormats<TLibFormatToken = string> {
        /** Localized full date @example "Jan 1, 2019" */
        fullDate: TLibFormatToken;
        /** Partially localized full date with weekday, useful for text-to-speech accessibility @example "Tuesday, January 1, 2019" */
        fullDateWithWeekday: TLibFormatToken;
        /** Date format string with month and day of month @example "1 January" */
        normalDate: TLibFormatToken;
        /** Date format string with weekday, month and day of month @example "Wed, Jan 1" */
        normalDateWithWeekday: TLibFormatToken;
        /** Shorter day format @example "Jan 1" */
        shortDate: TLibFormatToken;
        /** Year format string @example "2019" */
        year: TLibFormatToken;
        /** Month format string @example "January" */
        month: TLibFormatToken;
        /** Short month format string @example "Jan" */
        monthShort: TLibFormatToken;
        /** Short month format string @example "January 2018" */
        monthAndYear: TLibFormatToken;
        /** Month with date format string @example "January 1" */
        monthAndDate: TLibFormatToken;
        /** Weekday format string @example "Wednesday" */
        weekday: TLibFormatToken;
        /** Short weekday format string @example "Wed" */
        weekdayShort: TLibFormatToken;
        /** Day format string @example "1" */
        dayOfMonth: TLibFormatToken;
        /** Hours format string @example "11" */
        hours12h: TLibFormatToken;
        /** Hours format string @example "23" */
        hours24h: TLibFormatToken;
        /** Minutes format string @example "44" */
        minutes: TLibFormatToken;
        /** Seconds format string @example "00" */
        seconds: TLibFormatToken;
        /** Full time localized format string @example "11:44 PM" for US, "23:44" for Europe */
        fullTime: TLibFormatToken;
        /** Not localized full time format string @example "11:44 PM" */
        fullTime12h: TLibFormatToken;
        /** Not localized full time format string @example "23:44" */
        fullTime24h: TLibFormatToken;
        /** Date & time format string with localized time @example "Jan 1, 2018 11:44 PM" */
        fullDateTime: TLibFormatToken;
        /** Not localized date & Time format 12h @example "Jan 1, 2018 11:44 PM" */
        fullDateTime12h: TLibFormatToken;
        /** Not localized date & Time format 24h @example "Jan 1, 2018 23:44" */
        fullDateTime24h: TLibFormatToken;
        /** Localized keyboard input friendly date format @example "02/13/2020 */
        keyboardDate: TLibFormatToken;
        /** Localized keyboard input friendly date/time format @example "02/13/2020 23:44" */
        keyboardDateTime: TLibFormatToken;
        /** Partially localized keyboard input friendly date/time 12h format @example "02/13/2020 11:44 PM" */
        keyboardDateTime12h: TLibFormatToken;
        /** Partially localized keyboard input friendly date/time 24h format @example "02/13/2020 23:44" */
        keyboardDateTime24h: TLibFormatToken;
    }
    export type Unit = "years" | "quarters" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | "milliseconds";
    export interface ExtendableDateType {
    }
    export interface IUtils<TDate extends ExtendableDateType> {
        formats: DateIOFormats<any>;
        locale?: any;
        moment?: any;
        dayjs?: any;
        /** Name of the library that is used right now */
        lib: string;
        date(value?: any): TDate | null;
        toJsDate(value: TDate): Date;
        parseISO(isString: string): TDate;
        toISO(value: TDate): string;
        parse(value: string, format: string): TDate | null;
        getCurrentLocaleCode(): string;
        is12HourCycleInCurrentLocale(): boolean;
        /** Returns user readable format (taking into account localized format tokens), useful to render helper text for input (e.g. placeholder). For luxon always returns empty string. */
        getFormatHelperText(format: string): string;
        isNull(value: TDate | null): boolean;
        isValid(value: any): boolean;
        getDiff(value: TDate, comparing: TDate | string, unit?: Unit): number;
        isEqual(value: any, comparing: any): boolean;
        isSameDay(value: TDate, comparing: TDate): boolean;
        isSameMonth(value: TDate, comparing: TDate): boolean;
        isSameYear(value: TDate, comparing: TDate): boolean;
        isSameHour(value: TDate, comparing: TDate): boolean;
        isAfter(value: TDate, comparing: TDate): boolean;
        isAfterDay(value: TDate, comparing: TDate): boolean;
        isAfterYear(value: TDate, comparing: TDate): boolean;
        isBeforeDay(value: TDate, comparing: TDate): boolean;
        isBeforeYear(value: TDate, comparing: TDate): boolean;
        isBefore(value: TDate, comparing: TDate): boolean;
        isWithinRange(value: TDate, range: [TDate, TDate]): boolean;
        startOfMonth(value: TDate): TDate;
        endOfMonth(value: TDate): TDate;
        startOfWeek(value: TDate): TDate;
        endOfWeek(value: TDate): TDate;
        addSeconds(value: TDate, count: number): TDate;
        addMinutes(value: TDate, count: number): TDate;
        addHours(value: TDate, count: number): TDate;
        addDays(value: TDate, count: number): TDate;
        addWeeks(value: TDate, count: number): TDate;
        addMonths(value: TDate, count: number): TDate;
        startOfDay(value: TDate): TDate;
        endOfDay(value: TDate): TDate;
        format(value: TDate, formatKey: keyof DateIOFormats): string;
        formatByString(value: TDate, formatString: string): string;
        formatNumber(numberToFormat: string): string;
        getHours(value: TDate): number;
        setHours(value: TDate, count: number): TDate;
        getMinutes(value: TDate): number;
        setMinutes(value: TDate, count: number): TDate;
        getSeconds(value: TDate): number;
        setSeconds(value: TDate, count: number): TDate;
        getMonth(value: TDate): number;
        getDaysInMonth(value: TDate): number;
        setMonth(value: TDate, count: number): TDate;
        getNextMonth(value: TDate): TDate;
        getPreviousMonth(value: TDate): TDate;
        getMonthArray(value: TDate): TDate[];
        getYear(value: TDate): number;
        setYear(value: TDate, count: number): TDate;
        mergeDateAndTime(date: TDate, time: TDate): TDate;
        getWeekdays(): string[];
        getWeekArray(date: TDate): TDate[][];
        getYearRange(start: TDate, end: TDate): TDate[];
        /** Allow to customize displaying "am/pm" strings */
        getMeridiemText(ampm: "am" | "pm"): string;
    }
}
declare module "@date-io/date-fns/index" {
    import { IUtils, DateIOFormats, Unit } from "@date-io/core/IUtils";
    type Locale = any;
    export interface DateFnsUtils extends IUtils<Date> {
        lib: string;
        locale?: Locale;
        formats: DateIOFormats;
        constructor({ locale, formats, }?: {
            formats?: Partial<DateIOFormats>;
            locale?: Locale;
        }): any;
        is12HourCycleInCurrentLocale: () => boolean;
        getFormatHelperText: (format: string) => string;
        parseISO: (isoString: string) => Date;
        toISO: (value: Date) => string;
        getCurrentLocaleCode: () => string;
        addSeconds: (value: Date, count: number) => Date;
        addMinutes: (value: Date, count: number) => Date;
        addHours: (value: Date, count: number) => Date;
        addDays: (value: Date, count: number) => Date;
        addWeeks: (value: Date, count: number) => Date;
        addMonths: (value: Date, count: number) => Date;
        isValid: (value: any) => boolean;
        getDiff: (value: Date, comparing: Date | string, unit?: Unit) => number;
        isAfter: (value: Date, comparing: Date) => boolean;
        isBefore: (value: Date, comparing: Date) => boolean;
        startOfDay: (value: Date) => Date;
        endOfDay: (value: Date) => Date;
        getHours: (value: Date) => number;
        setHours: (value: Date, count: number) => Date;
        setMinutes: (value: Date, count: number) => Date;
        getSeconds: (value: Date) => number;
        setSeconds: (value: Date, count: number) => Date;
        isSameDay: (value: Date, comparing: Date) => boolean;
        isSameMonth: (value: Date, comparing: Date) => boolean;
        isSameYear: (value: Date, comparing: Date) => boolean;
        isSameHour: (value: Date, comparing: Date) => boolean;
        startOfMonth: (value: Date) => Date;
        endOfMonth: (value: Date) => Date;
        startOfWeek: (value: Date) => Date;
        endOfWeek: (value: Date) => Date;
        getYear: (value: Date) => number;
        setYear: (value: Date, count: number) => Date;
        date: (value?: any) => Date;
        toJsDate: (value: Date) => Date;
        parse: (value: string, formatString: string) => Date;
        format: (date: Date, formatKey: keyof DateIOFormats) => string;
        formatByString: (date: Date, formatString: string) => string;
        isEqual: (date: any, comparing: any) => boolean;
        isNull: (date: Date) => boolean;
        isAfterDay: (date: Date, value: Date) => boolean;
        isBeforeDay: (date: Date, value: Date) => boolean;
        isBeforeYear: (date: Date, value: Date) => boolean;
        isAfterYear: (date: Date, value: Date) => boolean;
        isWithinRange: (date: Date, [start, end]: [Date, Date]) => boolean;
        formatNumber: (numberToFormat: string) => string;
        getMinutes: (date: Date) => number;
        getMonth: (date: Date) => number;
        getDaysInMonth: (date: Date) => number;
        setMonth: (date: Date, count: number) => Date;
        getMeridiemText: (ampm: "am" | "pm") => "AM" | "PM";
        getNextMonth: (date: Date) => Date;
        getPreviousMonth: (date: Date) => Date;
        getMonthArray: (date: Date) => Date[];
        mergeDateAndTime: (date: Date, time: Date) => Date;
        getWeekdays: () => string[];
        getWeekArray: (date: Date) => Date[][];
        getYearRange: (start: Date, end: Date) => Date[];
    }
    export default DateFnsUtils;
    export {};
}
declare module "@date-io/dayjs/index" {
    import defaultDayjs from "dayjs";
    import { IUtils, DateIOFormats, Unit } from "@date-io/core/IUtils";
    interface Opts {
        locale?: string;
        /** Make sure that your dayjs instance extends customParseFormat and advancedFormat */
        instance?: typeof defaultDayjs;
        formats?: Partial<DateIOFormats>;
    }
    type Dayjs = defaultDayjs.Dayjs;
    type Constructor<TDate extends Dayjs> = (...args: Parameters<typeof defaultDayjs>) => TDate;
    export interface DayjsUtils<TDate extends Dayjs = Dayjs> extends IUtils<TDate> {
        rawDayJsInstance: typeof defaultDayjs;
        lib: string;
        dayjs: Constructor<TDate>;
        locale?: string;
        formats: DateIOFormats;
        constructor({ locale, formats, instance }?: Opts): any;
        is12HourCycleInCurrentLocale: () => boolean;
        getCurrentLocaleCode: () => string;
        getFormatHelperText: (format: string) => string;
        parseISO: (isoString: string) => TDate;
        toISO: (value: Dayjs) => string;
        parse: (value: any, format: string) => TDate;
        date: (value?: any) => TDate;
        toJsDate: (value: Dayjs) => Date;
        isValid: (value: any) => boolean;
        isNull: (date: Dayjs | null) => boolean;
        getDiff: (date: TDate, comparing: TDate, units?: Unit) => number;
        isAfter: (date: TDate, value: TDate) => boolean;
        isBefore: (date: TDate, value: TDate) => boolean;
        isAfterDay: (date: TDate, value: TDate) => boolean;
        isBeforeDay: (date: Dayjs, value: Dayjs) => boolean;
        isBeforeYear: (date: Dayjs, value: Dayjs) => boolean;
        isAfterYear: (date: Dayjs, value: Dayjs) => boolean;
        startOfDay: (date: TDate) => TDate;
        endOfDay: (date: TDate) => TDate;
        format: (date: Dayjs, formatKey: keyof DateIOFormats) => string;
        formatByString: (date: Dayjs, formatString: string) => string;
        formatNumber: (numberToFormat: string) => string;
        getHours: (date: Dayjs) => number;
        addSeconds: (date: TDate, count: number) => TDate;
        addMinutes: (date: Dayjs, count: number) => TDate;
        addHours: (date: Dayjs, count: number) => TDate;
        addDays: (date: Dayjs, count: number) => TDate;
        addWeeks: (date: Dayjs, count: number) => TDate;
        addMonths: (date: Dayjs, count: number) => TDate;
        setMonth: (date: Dayjs, count: number) => TDate;
        setHours: (date: Dayjs, count: number) => TDate;
        getMinutes: (date: Dayjs) => number;
        setMinutes: (date: Dayjs, count: number) => TDate;
        getSeconds: (date: Dayjs) => number;
        setSeconds: (date: Dayjs, count: number) => TDate;
        getMonth: (date: Dayjs) => number;
        getDaysInMonth: (date: Dayjs) => number;
        isSameDay: (date: Dayjs, comparing: Dayjs) => boolean;
        isSameMonth: (date: Dayjs, comparing: Dayjs) => boolean;
        isSameYear: (date: Dayjs, comparing: Dayjs) => boolean;
        isSameHour: (date: Dayjs, comparing: Dayjs) => boolean;
        getMeridiemText: (ampm: "am" | "pm") => "AM" | "PM";
        startOfMonth: (date: Dayjs) => TDate;
        endOfMonth: (date: Dayjs) => TDate;
        startOfWeek: (date: Dayjs) => TDate;
        endOfWeek: (date: Dayjs) => TDate;
        getNextMonth: (date: Dayjs) => TDate;
        getPreviousMonth: (date: Dayjs) => TDate;
        getMonthArray: (date: TDate) => TDate[];
        getYear: (date: Dayjs) => number;
        setYear: (date: Dayjs, year: number) => TDate;
        mergeDateAndTime: (date: TDate, time: TDate) => TDate;
        getWeekdays: () => string[];
        isEqual: (value: any, comparing: any) => boolean;
        getWeekArray: (date: TDate) => TDate[][];
        getYearRange: (start: TDate, end: TDate) => TDate[];
        isWithinRange: (date: TDate, [start, end]: [TDate, TDate]) => boolean;
    }
    export default DayjsUtils;
    export {};
}
declare module "@date-io/luxon/index" {
    import { DateTime } from "luxon";
    import { IUtils, DateIOFormats, Unit } from "@date-io/core/IUtils";
    export interface LuxonUtils extends IUtils<DateTime> {
        lib: string;
        locale: string;
        formats: DateIOFormats;
        constructor({ locale, formats, }?: {
            formats?: Partial<DateIOFormats>;
            locale?: string;
        }): any;
        date: (value?: any) => DateTime;
        toJsDate: (value: DateTime) => Date;
        parseISO: (isoString: string) => DateTime;
        toISO: (value: DateTime) => string;
        parse: (value: string, formatString: string) => DateTime;
        is12HourCycleInCurrentLocale: () => boolean;
        getFormatHelperText: (format: string) => string;
        getCurrentLocaleCode: () => string;
        addSeconds: (date: DateTime, count: number) => DateTime;
        addMinutes: (date: DateTime, count: number) => DateTime;
        addHours: (date: DateTime, count: number) => DateTime;
        addDays: (date: DateTime, count: number) => DateTime;
        addWeeks: (date: DateTime, count: number) => DateTime;
        addMonths: (date: DateTime, count: number) => DateTime;
        isValid: (value: any) => boolean;
        isEqual: (value: any, comparing: any) => boolean;
        isSameDay: (date: DateTime, comparing: DateTime) => boolean;
        isSameMonth: (date: DateTime, comparing: DateTime) => boolean;
        isSameYear: (date: DateTime, comparing: DateTime) => boolean;
        isSameHour: (date: DateTime, comparing: DateTime) => boolean;
        isAfter: (value: DateTime, comparing: DateTime) => boolean;
        isBefore: (value: DateTime, comparing: DateTime) => boolean;
        isBeforeDay: (value: DateTime, comparing: DateTime) => boolean;
        isAfterDay: (value: DateTime, comparing: DateTime) => boolean;
        isBeforeYear: (value: DateTime, comparing: DateTime) => boolean;
        isAfterYear: (value: DateTime, comparing: DateTime) => boolean;
        getDiff: (value: DateTime, comparing: DateTime | string, unit?: Unit) => number;
        startOfDay: (value: DateTime) => DateTime;
        endOfDay: (value: DateTime) => DateTime;
        format: (date: DateTime, formatKey: keyof DateIOFormats) => string;
        formatByString: (date: DateTime, format: string) => string;
        formatNumber: (numberToFormat: string) => string;
        getHours: (value: DateTime) => number;
        setHours: (value: DateTime, count: number) => DateTime;
        getMinutes: (value: DateTime) => number;
        setMinutes: (value: DateTime, count: number) => DateTime;
        getSeconds: (value: DateTime) => number;
        setSeconds: (value: DateTime, count: number) => DateTime;
        getMonth: (value: DateTime) => number;
        getDaysInMonth: (value: DateTime) => number;
        setMonth: (value: DateTime, count: number) => DateTime;
        getYear: (value: DateTime) => number;
        setYear: (value: DateTime, year: number) => DateTime;
        mergeDateAndTime: (date: DateTime, time: DateTime) => DateTime;
        startOfMonth: (value: DateTime) => DateTime;
        endOfMonth: (value: DateTime) => DateTime;
        startOfWeek: (value: DateTime) => DateTime;
        endOfWeek: (value: DateTime) => DateTime;
        getNextMonth: (value: DateTime) => DateTime;
        getPreviousMonth: (value: DateTime) => DateTime;
        getMonthArray: (date: DateTime) => DateTime[];
        getWeekdays: () => string[];
        getWeekArray: (date: DateTime) => DateTime[][];
        getYearRange: (start: DateTime, end: DateTime) => DateTime[];
        getMeridiemText: (ampm: "am" | "pm") => string;
        isNull: (date: DateTime | null) => boolean;
        isWithinRange: (date: DateTime, [start, end]: [DateTime, DateTime]) => boolean;
    }
    export default LuxonUtils;
}
declare module "@date-io/moment/index" {
    import defaultMoment from "moment";
    import { IUtils, DateIOFormats, Unit } from "@date-io/core/IUtils";
    interface Opts {
        locale?: string;
        instance?: typeof defaultMoment;
        formats?: Partial<DateIOFormats>;
    }
    type Moment = defaultMoment.Moment;
    export interface MomentUtils extends IUtils<defaultMoment.Moment> {
        moment: typeof defaultMoment;
        lib: string;
        locale?: string;
        formats: DateIOFormats;
        constructor({ locale, formats, instance }?: Opts): any;
        is12HourCycleInCurrentLocale: () => boolean;
        getFormatHelperText: (format: string) => string;
        getCurrentLocaleCode: () => string;
        parseISO: (isoString: string) => defaultMoment.Moment;
        toISO: (value: Moment) => string;
        parse: (value: string, format: string) => defaultMoment.Moment;
        date: (value?: any) => defaultMoment.Moment;
        toJsDate: (value: Moment) => Date;
        isValid: (value: any) => boolean;
        isNull: (date: Moment) => boolean;
        getDiff: (date: Moment, comparing: Moment | string, unit?: Unit) => number;
        isAfter: (date: Moment, value: Moment) => boolean;
        isBefore: (date: Moment, value: Moment) => boolean;
        isAfterDay: (date: Moment, value: Moment) => boolean;
        isBeforeDay: (date: Moment, value: Moment) => boolean;
        isBeforeYear: (date: Moment, value: Moment) => boolean;
        isAfterYear: (date: Moment, value: Moment) => boolean;
        startOfDay: (date: Moment) => defaultMoment.Moment;
        endOfDay: (date: Moment) => defaultMoment.Moment;
        format: (date: Moment, formatKey: keyof DateIOFormats) => string;
        formatByString: (date: Moment, formatString: string) => string;
        formatNumber: (numberToFormat: string) => string;
        getHours: (date: Moment) => number;
        addSeconds: (date: Moment, count: number) => defaultMoment.Moment;
        addMinutes: (date: Moment, count: number) => defaultMoment.Moment;
        addHours: (date: Moment, count: number) => defaultMoment.Moment;
        addDays: (date: Moment, count: number) => defaultMoment.Moment;
        addWeeks: (date: Moment, count: number) => defaultMoment.Moment;
        addMonths: (date: Moment, count: number) => defaultMoment.Moment;
        setHours: (date: Moment, count: number) => defaultMoment.Moment;
        getMinutes: (date: Moment) => number;
        setMinutes: (date: Moment, count: number) => defaultMoment.Moment;
        getSeconds: (date: Moment) => number;
        setSeconds: (date: Moment, count: number) => defaultMoment.Moment;
        getMonth: (date: Moment) => number;
        getDaysInMonth: (date: Moment) => number;
        isSameDay: (date: Moment, comparing: Moment) => boolean;
        isSameMonth: (date: Moment, comparing: Moment) => boolean;
        isSameYear: (date: Moment, comparing: Moment) => boolean;
        isSameHour: (date: Moment, comparing: Moment) => boolean;
        setMonth: (date: Moment, count: number) => defaultMoment.Moment;
        getMeridiemText: (ampm: "am" | "pm") => string;
        startOfMonth: (date: Moment) => defaultMoment.Moment;
        endOfMonth: (date: Moment) => defaultMoment.Moment;
        startOfWeek: (date: Moment) => defaultMoment.Moment;
        endOfWeek: (date: Moment) => defaultMoment.Moment;
        getNextMonth: (date: Moment) => defaultMoment.Moment;
        getPreviousMonth: (date: Moment) => defaultMoment.Moment;
        getMonthArray: (date: Moment) => defaultMoment.Moment[];
        getYear: (date: Moment) => number;
        setYear: (date: Moment, year: number) => defaultMoment.Moment;
        mergeDateAndTime: (date: Moment, time: Moment) => defaultMoment.Moment;
        getWeekdays: () => string[];
        isEqual: (value: any, comparing: any) => boolean;
        getWeekArray: (date: Moment) => defaultMoment.Moment[][];
        getYearRange: (start: Moment, end: Moment) => defaultMoment.Moment[];
        isWithinRange: (date: Moment, [start, end]: [Moment, Moment]) => boolean;
    }
    export default MomentUtils;
    export {};
}
