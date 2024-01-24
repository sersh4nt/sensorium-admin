/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  ControlDevicesListErrorResponse400,
  ControlEquipmentCreateErrorResponse400,
  ControlEquipmentDestroyErrorResponse400,
  ControlEquipmentIndicatorsRetrieveErrorResponse400,
  ControlEquipmentListErrorResponse400,
  ControlEquipmentPartialUpdateErrorResponse400,
  ControlEquipmentRetrieveErrorResponse400,
  ControlEquipmentUpdateErrorResponse400,
  ControlIndicatorsCreateErrorResponse400,
  ControlIndicatorsDestroyErrorResponse400,
  ControlIndicatorsListErrorResponse400,
  ControlIndicatorsPartialUpdateErrorResponse400,
  ControlIndicatorsRetrieveErrorResponse400,
  ControlIndicatorsUpdateErrorResponse400,
  ControlIndicatorsValuesRetrieveErrorResponse400,
  Device,
  Equipment,
  ErrorResponse401,
  ErrorResponse404,
  ErrorResponse405,
  ErrorResponse406,
  ErrorResponse415,
  ErrorResponse500,
  Indicators,
  PatchedEquipment,
  PatchedIndicators
} from '../../models'
import { customInstance } from '../../providers/axios';

// https://stackoverflow.com/questions/49579094/typescript-conditional-types-filter-out-readonly-properties-pick-only-requir/49579497#49579497
type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
T,
>() => T extends Y ? 1 : 2
? A
: B;

type WritableKeys<T> = {
[P in keyof T]-?: IfEquals<
  { [Q in P]: T[P] },
  { -readonly [Q in P]: T[P] },
  P
>;
}[keyof T];

type UnionToIntersection<U> =
  (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never;
type DistributeReadOnlyOverUnions<T> = T extends any ? NonReadonly<T> : never;

type Writable<T> = Pick<T, WritableKeys<T>>;
type NonReadonly<T> = [T] extends [UnionToIntersection<T>] ? {
  [P in keyof Writable<T>]: T[P] extends object
    ? NonReadonly<NonNullable<T[P]>>
    : T[P];
} : DistributeReadOnlyOverUnions<T>;



// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;


export const controlDevicesList = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<Device[]>(
      {url: `/api/v1/control/devices/`, method: 'GET', signal
    },
      options);
    }
  

export const getControlDevicesListQueryKey = () => {
    
    return [`/api/v1/control/devices/`] as const;
    }

    
export const getControlDevicesListQueryOptions = <TData = Awaited<ReturnType<typeof controlDevicesList>>, TError = ControlDevicesListErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlDevicesList>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getControlDevicesListQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof controlDevicesList>>> = ({ signal }) => controlDevicesList(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof controlDevicesList>>, TError, TData> & { queryKey: QueryKey }
}

export type ControlDevicesListQueryResult = NonNullable<Awaited<ReturnType<typeof controlDevicesList>>>
export type ControlDevicesListQueryError = ControlDevicesListErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

export const useControlDevicesList = <TData = Awaited<ReturnType<typeof controlDevicesList>>, TError = ControlDevicesListErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlDevicesList>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getControlDevicesListQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const controlEquipmentList = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<Equipment[]>(
      {url: `/api/v1/control/equipment/`, method: 'GET', signal
    },
      options);
    }
  

export const getControlEquipmentListQueryKey = () => {
    
    return [`/api/v1/control/equipment/`] as const;
    }

    
export const getControlEquipmentListQueryOptions = <TData = Awaited<ReturnType<typeof controlEquipmentList>>, TError = ControlEquipmentListErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlEquipmentList>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getControlEquipmentListQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof controlEquipmentList>>> = ({ signal }) => controlEquipmentList(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof controlEquipmentList>>, TError, TData> & { queryKey: QueryKey }
}

export type ControlEquipmentListQueryResult = NonNullable<Awaited<ReturnType<typeof controlEquipmentList>>>
export type ControlEquipmentListQueryError = ControlEquipmentListErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

export const useControlEquipmentList = <TData = Awaited<ReturnType<typeof controlEquipmentList>>, TError = ControlEquipmentListErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlEquipmentList>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getControlEquipmentListQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const controlEquipmentCreate = (
    equipment: NonReadonly<Equipment>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<Equipment>(
      {url: `/api/v1/control/equipment/`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: equipment
    },
      options);
    }
  


export const getControlEquipmentCreateMutationOptions = <TError = ControlEquipmentCreateErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlEquipmentCreate>>, TError,{data: NonReadonly<Equipment>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof controlEquipmentCreate>>, TError,{data: NonReadonly<Equipment>}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof controlEquipmentCreate>>, {data: NonReadonly<Equipment>}> = (props) => {
          const {data} = props ?? {};

          return  controlEquipmentCreate(data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type ControlEquipmentCreateMutationResult = NonNullable<Awaited<ReturnType<typeof controlEquipmentCreate>>>
    export type ControlEquipmentCreateMutationBody = NonReadonly<Equipment>
    export type ControlEquipmentCreateMutationError = ControlEquipmentCreateErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

    export const useControlEquipmentCreate = <TError = ControlEquipmentCreateErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlEquipmentCreate>>, TError,{data: NonReadonly<Equipment>}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {

      const mutationOptions = getControlEquipmentCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const controlEquipmentRetrieve = (
    id: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<Equipment>(
      {url: `/api/v1/control/equipment/${id}/`, method: 'GET', signal
    },
      options);
    }
  

export const getControlEquipmentRetrieveQueryKey = (id: string,) => {
    
    return [`/api/v1/control/equipment/${id}/`] as const;
    }

    
export const getControlEquipmentRetrieveQueryOptions = <TData = Awaited<ReturnType<typeof controlEquipmentRetrieve>>, TError = ControlEquipmentRetrieveErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlEquipmentRetrieve>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getControlEquipmentRetrieveQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof controlEquipmentRetrieve>>> = ({ signal }) => controlEquipmentRetrieve(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof controlEquipmentRetrieve>>, TError, TData> & { queryKey: QueryKey }
}

export type ControlEquipmentRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof controlEquipmentRetrieve>>>
export type ControlEquipmentRetrieveQueryError = ControlEquipmentRetrieveErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

export const useControlEquipmentRetrieve = <TData = Awaited<ReturnType<typeof controlEquipmentRetrieve>>, TError = ControlEquipmentRetrieveErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlEquipmentRetrieve>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getControlEquipmentRetrieveQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const controlEquipmentUpdate = (
    id: string,
    equipment: NonReadonly<Equipment>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<Equipment>(
      {url: `/api/v1/control/equipment/${id}/`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: equipment
    },
      options);
    }
  


export const getControlEquipmentUpdateMutationOptions = <TError = ControlEquipmentUpdateErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlEquipmentUpdate>>, TError,{id: string;data: NonReadonly<Equipment>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof controlEquipmentUpdate>>, TError,{id: string;data: NonReadonly<Equipment>}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof controlEquipmentUpdate>>, {id: string;data: NonReadonly<Equipment>}> = (props) => {
          const {id,data} = props ?? {};

          return  controlEquipmentUpdate(id,data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type ControlEquipmentUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof controlEquipmentUpdate>>>
    export type ControlEquipmentUpdateMutationBody = NonReadonly<Equipment>
    export type ControlEquipmentUpdateMutationError = ControlEquipmentUpdateErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

    export const useControlEquipmentUpdate = <TError = ControlEquipmentUpdateErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlEquipmentUpdate>>, TError,{id: string;data: NonReadonly<Equipment>}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {

      const mutationOptions = getControlEquipmentUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const controlEquipmentPartialUpdate = (
    id: string,
    patchedEquipment: NonReadonly<PatchedEquipment>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<Equipment>(
      {url: `/api/v1/control/equipment/${id}/`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: patchedEquipment
    },
      options);
    }
  


export const getControlEquipmentPartialUpdateMutationOptions = <TError = ControlEquipmentPartialUpdateErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlEquipmentPartialUpdate>>, TError,{id: string;data: NonReadonly<PatchedEquipment>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof controlEquipmentPartialUpdate>>, TError,{id: string;data: NonReadonly<PatchedEquipment>}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof controlEquipmentPartialUpdate>>, {id: string;data: NonReadonly<PatchedEquipment>}> = (props) => {
          const {id,data} = props ?? {};

          return  controlEquipmentPartialUpdate(id,data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type ControlEquipmentPartialUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof controlEquipmentPartialUpdate>>>
    export type ControlEquipmentPartialUpdateMutationBody = NonReadonly<PatchedEquipment>
    export type ControlEquipmentPartialUpdateMutationError = ControlEquipmentPartialUpdateErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

    export const useControlEquipmentPartialUpdate = <TError = ControlEquipmentPartialUpdateErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlEquipmentPartialUpdate>>, TError,{id: string;data: NonReadonly<PatchedEquipment>}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {

      const mutationOptions = getControlEquipmentPartialUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const controlEquipmentDestroy = (
    id: string,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<void>(
      {url: `/api/v1/control/equipment/${id}/`, method: 'DELETE'
    },
      options);
    }
  


export const getControlEquipmentDestroyMutationOptions = <TError = ControlEquipmentDestroyErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlEquipmentDestroy>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof controlEquipmentDestroy>>, TError,{id: string}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof controlEquipmentDestroy>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  controlEquipmentDestroy(id,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type ControlEquipmentDestroyMutationResult = NonNullable<Awaited<ReturnType<typeof controlEquipmentDestroy>>>
    
    export type ControlEquipmentDestroyMutationError = ControlEquipmentDestroyErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

    export const useControlEquipmentDestroy = <TError = ControlEquipmentDestroyErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlEquipmentDestroy>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {

      const mutationOptions = getControlEquipmentDestroyMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const controlEquipmentIndicatorsRetrieve = (
    id: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<Equipment>(
      {url: `/api/v1/control/equipment/${id}/indicators/`, method: 'GET', signal
    },
      options);
    }
  

export const getControlEquipmentIndicatorsRetrieveQueryKey = (id: string,) => {
    
    return [`/api/v1/control/equipment/${id}/indicators/`] as const;
    }

    
export const getControlEquipmentIndicatorsRetrieveQueryOptions = <TData = Awaited<ReturnType<typeof controlEquipmentIndicatorsRetrieve>>, TError = ControlEquipmentIndicatorsRetrieveErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlEquipmentIndicatorsRetrieve>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getControlEquipmentIndicatorsRetrieveQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof controlEquipmentIndicatorsRetrieve>>> = ({ signal }) => controlEquipmentIndicatorsRetrieve(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof controlEquipmentIndicatorsRetrieve>>, TError, TData> & { queryKey: QueryKey }
}

export type ControlEquipmentIndicatorsRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof controlEquipmentIndicatorsRetrieve>>>
export type ControlEquipmentIndicatorsRetrieveQueryError = ControlEquipmentIndicatorsRetrieveErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

export const useControlEquipmentIndicatorsRetrieve = <TData = Awaited<ReturnType<typeof controlEquipmentIndicatorsRetrieve>>, TError = ControlEquipmentIndicatorsRetrieveErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlEquipmentIndicatorsRetrieve>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getControlEquipmentIndicatorsRetrieveQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const controlIndicatorsList = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<Indicators[]>(
      {url: `/api/v1/control/indicators/`, method: 'GET', signal
    },
      options);
    }
  

export const getControlIndicatorsListQueryKey = () => {
    
    return [`/api/v1/control/indicators/`] as const;
    }

    
export const getControlIndicatorsListQueryOptions = <TData = Awaited<ReturnType<typeof controlIndicatorsList>>, TError = ControlIndicatorsListErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlIndicatorsList>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getControlIndicatorsListQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof controlIndicatorsList>>> = ({ signal }) => controlIndicatorsList(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof controlIndicatorsList>>, TError, TData> & { queryKey: QueryKey }
}

export type ControlIndicatorsListQueryResult = NonNullable<Awaited<ReturnType<typeof controlIndicatorsList>>>
export type ControlIndicatorsListQueryError = ControlIndicatorsListErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

export const useControlIndicatorsList = <TData = Awaited<ReturnType<typeof controlIndicatorsList>>, TError = ControlIndicatorsListErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlIndicatorsList>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getControlIndicatorsListQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const controlIndicatorsCreate = (
    indicators: NonReadonly<Indicators>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<Indicators>(
      {url: `/api/v1/control/indicators/`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: indicators
    },
      options);
    }
  


export const getControlIndicatorsCreateMutationOptions = <TError = ControlIndicatorsCreateErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlIndicatorsCreate>>, TError,{data: NonReadonly<Indicators>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof controlIndicatorsCreate>>, TError,{data: NonReadonly<Indicators>}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof controlIndicatorsCreate>>, {data: NonReadonly<Indicators>}> = (props) => {
          const {data} = props ?? {};

          return  controlIndicatorsCreate(data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type ControlIndicatorsCreateMutationResult = NonNullable<Awaited<ReturnType<typeof controlIndicatorsCreate>>>
    export type ControlIndicatorsCreateMutationBody = NonReadonly<Indicators>
    export type ControlIndicatorsCreateMutationError = ControlIndicatorsCreateErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

    export const useControlIndicatorsCreate = <TError = ControlIndicatorsCreateErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlIndicatorsCreate>>, TError,{data: NonReadonly<Indicators>}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {

      const mutationOptions = getControlIndicatorsCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const controlIndicatorsRetrieve = (
    id: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<Indicators>(
      {url: `/api/v1/control/indicators/${id}/`, method: 'GET', signal
    },
      options);
    }
  

export const getControlIndicatorsRetrieveQueryKey = (id: string,) => {
    
    return [`/api/v1/control/indicators/${id}/`] as const;
    }

    
export const getControlIndicatorsRetrieveQueryOptions = <TData = Awaited<ReturnType<typeof controlIndicatorsRetrieve>>, TError = ControlIndicatorsRetrieveErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlIndicatorsRetrieve>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getControlIndicatorsRetrieveQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof controlIndicatorsRetrieve>>> = ({ signal }) => controlIndicatorsRetrieve(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof controlIndicatorsRetrieve>>, TError, TData> & { queryKey: QueryKey }
}

export type ControlIndicatorsRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof controlIndicatorsRetrieve>>>
export type ControlIndicatorsRetrieveQueryError = ControlIndicatorsRetrieveErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

export const useControlIndicatorsRetrieve = <TData = Awaited<ReturnType<typeof controlIndicatorsRetrieve>>, TError = ControlIndicatorsRetrieveErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlIndicatorsRetrieve>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getControlIndicatorsRetrieveQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const controlIndicatorsUpdate = (
    id: string,
    indicators: NonReadonly<Indicators>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<Indicators>(
      {url: `/api/v1/control/indicators/${id}/`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: indicators
    },
      options);
    }
  


export const getControlIndicatorsUpdateMutationOptions = <TError = ControlIndicatorsUpdateErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlIndicatorsUpdate>>, TError,{id: string;data: NonReadonly<Indicators>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof controlIndicatorsUpdate>>, TError,{id: string;data: NonReadonly<Indicators>}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof controlIndicatorsUpdate>>, {id: string;data: NonReadonly<Indicators>}> = (props) => {
          const {id,data} = props ?? {};

          return  controlIndicatorsUpdate(id,data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type ControlIndicatorsUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof controlIndicatorsUpdate>>>
    export type ControlIndicatorsUpdateMutationBody = NonReadonly<Indicators>
    export type ControlIndicatorsUpdateMutationError = ControlIndicatorsUpdateErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

    export const useControlIndicatorsUpdate = <TError = ControlIndicatorsUpdateErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlIndicatorsUpdate>>, TError,{id: string;data: NonReadonly<Indicators>}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {

      const mutationOptions = getControlIndicatorsUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const controlIndicatorsPartialUpdate = (
    id: string,
    patchedIndicators: NonReadonly<PatchedIndicators>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<Indicators>(
      {url: `/api/v1/control/indicators/${id}/`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: patchedIndicators
    },
      options);
    }
  


export const getControlIndicatorsPartialUpdateMutationOptions = <TError = ControlIndicatorsPartialUpdateErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlIndicatorsPartialUpdate>>, TError,{id: string;data: NonReadonly<PatchedIndicators>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof controlIndicatorsPartialUpdate>>, TError,{id: string;data: NonReadonly<PatchedIndicators>}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof controlIndicatorsPartialUpdate>>, {id: string;data: NonReadonly<PatchedIndicators>}> = (props) => {
          const {id,data} = props ?? {};

          return  controlIndicatorsPartialUpdate(id,data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type ControlIndicatorsPartialUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof controlIndicatorsPartialUpdate>>>
    export type ControlIndicatorsPartialUpdateMutationBody = NonReadonly<PatchedIndicators>
    export type ControlIndicatorsPartialUpdateMutationError = ControlIndicatorsPartialUpdateErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

    export const useControlIndicatorsPartialUpdate = <TError = ControlIndicatorsPartialUpdateErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlIndicatorsPartialUpdate>>, TError,{id: string;data: NonReadonly<PatchedIndicators>}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {

      const mutationOptions = getControlIndicatorsPartialUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const controlIndicatorsDestroy = (
    id: string,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<void>(
      {url: `/api/v1/control/indicators/${id}/`, method: 'DELETE'
    },
      options);
    }
  


export const getControlIndicatorsDestroyMutationOptions = <TError = ControlIndicatorsDestroyErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlIndicatorsDestroy>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof controlIndicatorsDestroy>>, TError,{id: string}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof controlIndicatorsDestroy>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  controlIndicatorsDestroy(id,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type ControlIndicatorsDestroyMutationResult = NonNullable<Awaited<ReturnType<typeof controlIndicatorsDestroy>>>
    
    export type ControlIndicatorsDestroyMutationError = ControlIndicatorsDestroyErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

    export const useControlIndicatorsDestroy = <TError = ControlIndicatorsDestroyErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof controlIndicatorsDestroy>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {

      const mutationOptions = getControlIndicatorsDestroyMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const controlIndicatorsValuesRetrieve = (
    id: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<Indicators>(
      {url: `/api/v1/control/indicators/${id}/values/`, method: 'GET', signal
    },
      options);
    }
  

export const getControlIndicatorsValuesRetrieveQueryKey = (id: string,) => {
    
    return [`/api/v1/control/indicators/${id}/values/`] as const;
    }

    
export const getControlIndicatorsValuesRetrieveQueryOptions = <TData = Awaited<ReturnType<typeof controlIndicatorsValuesRetrieve>>, TError = ControlIndicatorsValuesRetrieveErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlIndicatorsValuesRetrieve>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getControlIndicatorsValuesRetrieveQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof controlIndicatorsValuesRetrieve>>> = ({ signal }) => controlIndicatorsValuesRetrieve(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof controlIndicatorsValuesRetrieve>>, TError, TData> & { queryKey: QueryKey }
}

export type ControlIndicatorsValuesRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof controlIndicatorsValuesRetrieve>>>
export type ControlIndicatorsValuesRetrieveQueryError = ControlIndicatorsValuesRetrieveErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

export const useControlIndicatorsValuesRetrieve = <TData = Awaited<ReturnType<typeof controlIndicatorsValuesRetrieve>>, TError = ControlIndicatorsValuesRetrieveErrorResponse400 | ErrorResponse401 | ErrorResponse404 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof controlIndicatorsValuesRetrieve>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getControlIndicatorsValuesRetrieveQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



