import React, { useCallback, useState, FormEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from 'actions';
import { forms as texts } from 'constants/texts';

import './loginForm.css';

type PropsFromDispatch = {
  onCreate(name: string): CreateAuthorAction
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onCreate: (name: string) => dispatch(actions.createAuthor(name)),
});

const LoginForm = ({ onCreate }: PropsFromDispatch) => {
  const [name, setName] = useState('');

  const onChangeInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  }, [setName]);

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(name);
  }, [name, onCreate]);

  return (
    <>
      <h2>If you're new here</h2>

      <form className='login-form' onSubmit={onSubmit}>
        <input
          className='login-form--input'
          placeholder={texts.loginPlaceholder}
          type='text'
          onChange={onChangeInput}
        />
        <button
          className='login-form--button'
          type='submit'
        >
          {texts.create}
        </button>
      </form>
    </>
  );
};

export default connect(null, mapDispatchToProps)(LoginForm);
