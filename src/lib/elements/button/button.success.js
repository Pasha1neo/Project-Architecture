import styled from 'styled-components';
import { text } from '../../common/text';
import { spacing, THEME_BORDER, THEME_COLOR } from '../../theme';

// Чёт в голову не приходит чё ещё можно впихнуть сюда
export function ButtonSuccess({
  type = 'button',
  children,
  disabledFn = null,
}) {
  return (
    <Button type={type} disabled={disabledFn}>
      {text(children)}
    </Button>
  );
}

const Button = styled.button`
  background: ${THEME_COLOR.BUTTON_PRIMARY};
  border-radius: ${THEME_BORDER.RADIUS.PRIMARY};
  padding: ${spacing(3)};
  color: ${THEME_COLOR.DEFAULT};
`;
