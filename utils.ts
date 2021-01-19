import { Counter } from './types';

export const isCounter = (row: Counter): row is Counter => {
  return typeof row.counter === 'number';
};

export const isCounters = (rows: Counter[]): rows is Counter[] => {
  return rows.every((row: Counter) => isCounter(row));
};

export const parseRows = (rows: Counter[]): Counter[] => {
  if (!rows || !isCounters(rows))
    throw new Error('Invalid rows');
  return rows;
};