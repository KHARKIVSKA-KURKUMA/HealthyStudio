import { useState } from "react";
import { accent } from "../../../variables/variables";
import {
  LogoWrap,
  LogoTitle,
  LeafsSvg,
  SwitchContainer,
  SwitchInput,
  SwitchLabel,
  SwitchSlider,
} from "./Logotype.styled";

const Logotype = () => {
  const [isChecked, setChecked] = useState(true);
  const handleToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <LogoWrap>
      <SwitchContainer>
        <SwitchLabel>
          <SwitchInput
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
          />
          <SwitchSlider />
        </SwitchLabel>
        <LeafsSvg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          style={{ fill: isChecked ? `${accent}` : `var(--color1, ${accent}` }}
        >
          <path d="M21.34 6.246c0 1.33 0.345 2.577 0.95 3.658-2.941-0.508-5.179-3.077-5.179-6.17 0-0.388 0.035-0.769 0.105-1.139 0.574-0.175 1.185-0.269 1.817-0.269 1.087 0 2.11 0.28 3 0.769-0.445 0.958-0.693 2.024-0.693 3.151z"></path>
          <path d="M29.609 3.734c0 2.826-1.866 5.214-4.432 5.993-0.441 0.134-0.9 0.222-1.378 0.253h-0.002c-0.773-1.042-1.231-2.335-1.231-3.734 0-0.867 0.176-1.694 0.494-2.446 0.896-2.117 2.92-3.636 5.318-3.8 0.773 1.042 1.231 2.335 1.231 3.734z"></path>
        </LeafsSvg>
      </SwitchContainer>
      <LogoTitle>Healthy switcher</LogoTitle>
    </LogoWrap>
  );
};

export default Logotype;
