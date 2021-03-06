export interface ZIndex {
    mobileStepper: number;
    speedDial: number;
    appBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
}
export declare type ZIndexOptions = Partial<ZIndex>;
declare const zIndex: ZIndex;
export default zIndex;
