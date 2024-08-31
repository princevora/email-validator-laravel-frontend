'use client'

import Card from './card';
import { useInputContext } from '@/context/input-context';
import { useEffect } from 'react';

export default function Validate(props) {
  const { setState, state } = useInputContext();

  useEffect(() => {
    if (props.params.input) {
      setState(props.params.input);
    }
  }, []);

  return (
    state && (
      <Card>
        <h1>fafjashjk</h1>
      </Card>
    )
  )
}
