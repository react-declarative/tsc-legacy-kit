declare type UnaryFn<Arg, Return> = (arg: Arg) => Return;
export declare type weakMemoize = <Arg extends object, Return>(func: UnaryFn<Arg, Return>) => UnaryFn<Arg, Return>;
export default weakMemoize;
