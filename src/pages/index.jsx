import {
  Button,
  Center,
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function Main() {
  const categories = [
    { title: "Movies" },
    { title: "Books" },
    { title: "TV Serials" },
    { title: "Games" },
    { title: "Manga" },
    { title: "Anime" },
  ];

  function onCardClick(title) {
    console.log("card", title);
  }

  function onButtonClick() {}

  let categoriesCards = [];
  categories.forEach((category, ind) => {
    categoriesCards.push(
      <Card
        cursor="pointer"
        key={ind}
        onClick={() => onCardClick(category.title)}
      >
        <CardHeader>{category.title}</CardHeader>
        <CardBody>
          <Button
            iconSpacing={0}
            onClick={onButtonClick}
            leftIcon={<AddIcon />}
            size="xs"
            style={{ float: "right", borderRadius: "50%" }}
          />
        </CardBody>
      </Card>
    );
  });

  return (
    <Center>
      <SimpleGrid columns={3} spacing={4}>
        {categoriesCards}
      </SimpleGrid>
    </Center>
  );
}
