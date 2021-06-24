import styled from 'styled-components';
import { spacing, THEME_COLOR } from '../../theme';
import { text } from '../../common/text';
import { TextSecondary, TextError } from '../text';
import { THEME_BORDER } from '../../theme';
export function FieldPrimary(props) {
  const {
    titleTid,
    onChange,
    onBlur,
    value,
    name,
    placeholderTid,
    error,
    type = 'text',
  } = props;
  return (
    <Container>
      <TextSecondary tid={titleTid} value={'Логин'} />
      <Input
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        placeholder={text(placeholderTid)}
        type={type}
      />
      {error && <TextError tid={error} />}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin-top: ${spacing(1)};
  border-radius: ${THEME_BORDER.RADIUS.PRIMARY};
  padding: ${spacing(3)};
  background-color: ${THEME_COLOR.INPUT_PRIMARY};
  color: ${THEME_COLOR.INPUT_TEXT_PRIMARY};
`;
