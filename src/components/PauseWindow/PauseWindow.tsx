import React from 'react';

import { ActionButton } from 'components/ActionButton';

import { StyledDialog, Title, Actions, StyledLink } from './styles';


export const PauseWindow = (props: OwnProps): JSX.Element => {
  const { isVisible, onClose, title, buttons} = props;

  return (
    <StyledDialog open={isVisible} onClose={onClose}>

      <Actions onClick ={onClose} >
        <Title disableTypography>
          <h4>{title}</h4>
        </Title>
        {buttons?.map((button) => (
            <StyledLink key={button.text} to={button.link}>
              <ActionButton >{button.text}</ActionButton>
            </StyledLink>
          ))}
      
      </Actions>
    </StyledDialog>
  );
};

type OwnProps = {
  title: string;
  isVisible: boolean;
  buttons?:Record<string,string>[];

  onClose: () => void;
};

PauseWindow.defaultProps={
  title:'Что вы хотите сделать?',
  buttons:[
  {text:'Продолжить', link:'play'},
  {text:'Завершить', link:''},
  {text:'Начать заново', link:''}],
}