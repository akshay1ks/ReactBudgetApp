import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm() {
    return(
      <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width={12} label='Description' placeholder="Placeholder text..."/>
          <Form.Input icon='dollar' iconPosition='left' width={4} label='Value' placeholder="Enter amount"/>
        </Form.Group>
        <ButtonSaveOrCancel />
      </Form>
    )
}

export default NewEntryForm

