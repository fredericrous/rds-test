import React, { PropsWithChildren } from 'react';
import { html, css } from 'react-strict-dom';

export interface ButtonProps {
  onClick?: () => void;
}

export const Button = ({
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <html.button style={styles.container} onClick={onClick}>
      {children}
    </html.button>
  );
};

const styles = css.create({
  container: {
    paddingTop: 8,
    paddingLeft: 32,
    paddingBottom: 8,
    paddingRight: 32,
    backgroundColor: 'purple',
    alignSelf: 'flex-start',
    borderRadius: 8,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
