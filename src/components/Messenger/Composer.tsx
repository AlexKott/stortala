import React, { useCallback, useState, FormEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from 'actions';
import { forms as texts } from 'constants/texts';

import './composer.css';

type OwnProps = {
  authorId: number
  parentId?: number
  onSend?(): void
}
type PropsFromDispatch = {
  onCreate(text: string): CreateMessageAction
}

const mapDispatchToProps = (dispatch: Dispatch, props: OwnProps): PropsFromDispatch => ({
  onCreate: (text: string) => dispatch(actions.createMessage(props.authorId, props.parentId || null, text)),
});

const Composer = ({ onCreate, onSend }: OwnProps & PropsFromDispatch) => {
  const [text, setText] = useState('');

  const onChangeText = useCallback((e: FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.currentTarget.value);
  }, [setText]);

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(text);
    setText('');

    if (onSend != null) {
      onSend();
    }
  }, [text, setText, onCreate, onSend])

  return (
    <form className='composer' onSubmit={onSubmit}>
      <textarea
        className='composer--input'
        placeholder={texts.messagePlaceholder}
        value={text}
        onChange={onChangeText}
      />
      <button
        className='composer--button'
        type='submit'
      >
        {texts.submit}
      </button>
    </form>
  );
};

export default connect(null, mapDispatchToProps)(Composer);
