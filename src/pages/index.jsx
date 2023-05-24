import {
  Button,
  Card,
  CardHeader,
  CardBody
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/router';
import { getCategories } from '../getCategories.jsx'


export default function Main() {
  const router = useRouter()
  const categories = [
    { title: "Movies", link: "movies" },
    { title: "Books", link: "books" },
    { title: "TV Serials", link: "tv_serials" },
    { title: "Games", link: "games" },
    { title: "Manga", link: "manga" },
    { title: "Anime", link: "anime" },
  ];
  
  getCategories()
  
  function onCardClick(link) {
    router.push(`/${link}`)
  }

  function onButtonClick(e, link) {
    e.stopPropagation()
    router.push(`/${link}/new`)
  }

  let categoriesCards = [];
  categories.forEach((category, ind) => {
    categoriesCards.push(
      <Card
        cursor="pointer"
        key={ind}
        onClick={(e) => onCardClick(category.link)}
      >
        <CardHeader>{category.title}</CardHeader>
        <CardBody>
          <Button
            iconSpacing={0}
            onClick={(e)=>onButtonClick(e,category.link)}
            leftIcon={<AddIcon />}
            size="xs"
            style={{ float: "right", borderRadius: "50%" }}
          />
        </CardBody>
      </Card>
    );
  });

  return (
    <>
    {categoriesCards}
    </>
  );
}
