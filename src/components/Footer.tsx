import { footerProps } from "@lib/types";
import { Text } from "@mantine/core";

export default function Footer({year, fullName, studentId}: footerProps) {
  return (
    
    <Text ta="center" my="sm" c="gray" >
      Copyright © {year} {fullName} {studentId}
    </Text>
  
  );
}


