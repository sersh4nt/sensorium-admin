import {
  Box,
  Collapse,
  Group,
  ThemeIcon,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { useState } from "react";
import { Equipment, Indicators } from "src/models";
import classes from "./EquipmentItem.module.css";
import { IconChevronRight, IconWashMachine } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { setIndicator } from "src/redux/indicator";
import { useCurrentIndicator } from "src/redux/hooks";

interface EquipmentItemProps {
  equipment: Equipment;
}

const EquipmentItem: React.FC<EquipmentItemProps> = ({ equipment }) => {
  const activeIndicator = useCurrentIndicator();
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);

  const selectIndicator = (indicator: Indicators) => {
    dispatch(setIndicator(indicator));
  };

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <IconWashMachine style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{equipment.name}</Box>
          </Box>
          <IconChevronRight
            className={classes.chevron}
            stroke={1.5}
            style={{
              width: rem(16),
              height: rem(16),
              transform: opened ? "rotate(-90deg)" : "none",
            }}
          />
        </Group>
      </UnstyledButton>
      <Collapse in={opened}>
        {equipment.indicators.map((indicator, key) => (
          <UnstyledButton
            className={classes.link}
            key={key}
            onClick={() => selectIndicator(indicator)}
            data-active={indicator.id === activeIndicator?.id || undefined}
          >
            Индикатор №{indicator.id}
          </UnstyledButton>
        ))}
      </Collapse>
    </>
  );
};

export default EquipmentItem;
