import React, {
  useCallback,
  useState,
  ChangeEvent,
  MouseEvent
} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from 'actions';

import { forms as texts } from 'constants/texts';

import './composer.css';

type OwnProps = {
  userId: number
}
type PropsFromDispatch = {
  onCreate(text: string): CreateMessageAction
}

const mapDispatchToProps = (dispatch: Dispatch, props: OwnProps): PropsFromDispatch => ({
  onCreate: (text: string) => dispatch(actions.createMessage(props.userId, null, text)),
});

const Composer = ({ onCreate }: OwnProps & PropsFromDispatch) => {
  const [text, setText] = useState('');
  const onChangeText = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.target.value);
  }, [setText]);
  const onSubmit = useCallback((e: MouseEvent) => {
    e.preventDefault();

    onCreate(text);
    setText('');
  }, [text, setText, onCreate])

  return (
    <form className='composer'>
      <textarea
        className='composer--input'
        placeholder={texts.messagePlaceholder}
        value={text}
        onChange={onChangeText}
      />
      <button
        className='composer--button'
        type='button'
        onClick={onSubmit}
      >
        {texts.submit}
      </button>
    </form>
  );
};

export default connect(null, mapDispatchToProps)(Composer);
