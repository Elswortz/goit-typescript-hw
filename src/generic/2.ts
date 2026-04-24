type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type topType = Pick<AllType, "name" | "color">;
type bottomType = Pick<AllType, "position" | "weight">;

function compare(top: topType, bottom: bottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const objectA = {
  name: "Andrii",
  position: 4,
  color: "red",
  weight: 85,
  form: "unique",
};

const objectB = {
  name: "Bogdan",
  position: 7,
  color: "green",
  weight: 90,
  class: "heavy",
};

compare(objectA, objectB);
