/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { ReduxConfig } from '@config';

const useAppDispatch = (action: any) => {
	const dispatch = useDispatch();

	return useCallback((param?: any, callback?: any) => dispatch(action(param, callback)), [dispatch, action]);
};

const useAppSelector: TypedUseSelectorHook<ReduxConfig.RootState> = useSelector;

const awaitTimeout = (delay: number) =>
	new Promise(resolve => setTimeout(resolve, delay));

export { useAppDispatch, useAppSelector, awaitTimeout };
