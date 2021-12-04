import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

const Wrapper = styled.div`
  margin: 40px;
`;

const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;

export { Wrapper, StyledButton };
