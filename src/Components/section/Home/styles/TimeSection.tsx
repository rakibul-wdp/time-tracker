import { times } from "@/Data/times";
import { memo, useCallback, useRef, useState } from "react";
import dropDown from "~/assets/arrow-drop_down.svg";
import { Images, Text } from "~/Components/common";
import { CustomDiv } from "~/Components/common/CustomDiv";
import useClickOutSide from "~/hooks/useClickOutSide";
import { useTheme } from "~/universal/theme";
import { DropdownList } from "./DropdownList";
import { Select } from "./Select";

const TimeSection = memo(({ tittle, time }: { tittle: string; time: string }) => {
  const [theme] = useTheme();
  const [open, setOpen] = useState(false);
  const [selectTime, setSelectTTime] = useState(time);

  const domRef = useRef<HTMLDivElement | null>(null);
  const domeNode = useClickOutSide();

  domeNode(
    domRef,
    useCallback(() => {
      setOpen(false);
    }, []),
  );

  const handleSelect = (value: string) => {
    setSelectTTime(value);
    setOpen(false);
  };
  return (
    <CustomDiv ref={domRef} width="fit-content" margin="0">
      <Text color={theme.accentHalfOpacity} weight="500" fontSize="14px" lineHeight="21px" align="start">
        {tittle}
      </Text>

      <Select onClick={() => setOpen(!open)}>
        <Text color={theme.primaryText} opacity={selectTime.length === 0 ? 0.5 : 1} weight="400" fontSize="12px" lineHeight="18px" marginLeft="10px">
          {selectTime.length === 0 ? "Select time" : selectTime}
        </Text>

        <Images src={dropDown} alt="my" rotate={open ? 180 : 0} margin="0 10px 0 0 " />
      </Select>

      {open && (
        <DropdownList onBlur={() => setOpen(false)}>
          {times.map((time, i) => (
            <Text key={i} opacity={0.8} hoverOpacity={1} onClick={() => handleSelect(time)} hoverBgColor="#C7F0DF">
              {time}
            </Text>
          ))}
        </DropdownList>
      )}
    </CustomDiv>
  );
});

export default TimeSection;
