import { v4 as uuidv4 } from "uuid";

import JohnDoeProfile from "assets/images/john_doe.jpg";
import KrystianPachProfile from "assets/images/krystian_pach.jpg";

export const user1 = {
  name: "John",
  surname: "Doe",
  profilePhoto: JohnDoeProfile,
  id: uuidv4(),
};

export const user2 = {
  name: "Krystian",
  surname: "Pach",
  profilePhoto: KrystianPachProfile,
  id: uuidv4(),
};
