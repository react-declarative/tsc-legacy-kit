import * as React from 'react';
export type useForkRef = <Instance>(refA: React.Ref<Instance> | null | undefined, refB: React.Ref<Instance> | null | undefined) => React.Ref<Instance> | null;
export default useForkRef