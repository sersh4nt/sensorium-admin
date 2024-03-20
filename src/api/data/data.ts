/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Sensorium API
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation
} from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions
} from '@tanstack/react-query'
import type {
  CreatePhoto,
  DataSavePhotoCreateErrorResponse400,
  ErrorResponse401,
  ErrorResponse405,
  ErrorResponse406,
  ErrorResponse415,
  ErrorResponse500
} from '../../models'
import { customInstance } from '../../providers/axios';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * Сохранение картинок вида base64 локально в папку media и показания датчика в таблицу indicator_values.
 */
export const dataSavePhotoCreate = (
    createPhoto: CreatePhoto,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<void>(
      {url: `/api/v1/data/save-photo/`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createPhoto
    },
      options);
    }
  


export const getDataSavePhotoCreateMutationOptions = <TError = DataSavePhotoCreateErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dataSavePhotoCreate>>, TError,{data: CreatePhoto}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof dataSavePhotoCreate>>, TError,{data: CreatePhoto}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof dataSavePhotoCreate>>, {data: CreatePhoto}> = (props) => {
          const {data} = props ?? {};

          return  dataSavePhotoCreate(data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type DataSavePhotoCreateMutationResult = NonNullable<Awaited<ReturnType<typeof dataSavePhotoCreate>>>
    export type DataSavePhotoCreateMutationBody = CreatePhoto
    export type DataSavePhotoCreateMutationError = DataSavePhotoCreateErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500

    export const useDataSavePhotoCreate = <TError = DataSavePhotoCreateErrorResponse400 | ErrorResponse401 | ErrorResponse405 | ErrorResponse406 | ErrorResponse415 | ErrorResponse500,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof dataSavePhotoCreate>>, TError,{data: CreatePhoto}, TContext>, request?: SecondParameter<typeof customInstance>}
) => {

      const mutationOptions = getDataSavePhotoCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    