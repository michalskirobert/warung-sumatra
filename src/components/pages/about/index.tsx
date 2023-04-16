import { CustomContainer } from "@components/shared";
import { useAppSelector } from "@store/config";
import { CONSTANTS } from "@utils/index";

export const About = () => {
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);
  return (
    <CustomContainer {...{ title: CONSTANTS.ABOUT_LABEL[language.value] }}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla possimus
        corporis dolores unde et labore? Excepturi, incidunt corporis maxime
        assumenda et alias dolor similique nemo debitis officiis! Aperiam, ullam
        recusandae.
      </p>
      <h2>Lorem ipsum dolor</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo fugit
        velit minima cupiditate itaque ipsam aperiam corporis, tempore odit
        aliquam optio at, excepturi cumque ratione fugiat voluptate asperiores,
        quaerat et cum magni quas ipsa molestiae obcaecati odio? Nulla facilis
        deserunt expedita eaque placeat provident sit minus veniam facere hic.
        Culpa, debitis quas vel iste nihil quia beatae necessitatibus inventore
        officiis obcaecati suscipit hic nam esse dolores tempore voluptatem
        pariatur laudantium ipsum accusamus, velit repellendus natus non.
        Distinctio ipsam repellat, dolore praesentium ad expedita. Nam ad
        doloremque, non et molestiae cumque aut! Rerum dolorem recusandae nam
        aliquid eos totam nostrum dolore sunt, est maiores officiis neque iure
        voluptatum quod tenetur corrupti laudantium aliquam perspiciatis
        corporis tempora atque, voluptas distinctio? Tempora consequatur veniam
        asperiores, impedit natus eaque non, minus neque et repellat nulla. Ea
        consectetur earum ab commodi? Obcaecati in accusantium distinctio
        architecto animi praesentium expedita molestiae nam quibusdam aspernatur
        sint, soluta fugiat aperiam aliquam ducimus consequuntur perferendis
        doloribus. Commodi provident corrupti impedit laborum. Quae, numquam
        asperiores. Consequatur ea, accusantium corporis voluptate modi soluta
        ipsum iure facere, ab fugit recusandae adipisci odio, corrupti deserunt
        sunt dolores est doloremque veritatis provident distinctio ipsa.
        Pariatur ullam commodi magni molestiae, dolor modi cupiditate unde atque
        fugit enim sunt. Officiis commodi possimus quam alias dolores nesciunt
        repellendus magnam suscipit. Laudantium deserunt temporibus tenetur
        voluptate laboriosam deleniti beatae! Ea aperiam magnam facilis, cum eum
        earum. Obcaecati at iste porro dolorem quasi! Amet perferendis natus
        asperiores ratione expedita non repudiandae voluptatem voluptatibus
        provident incidunt id assumenda, quasi earum, harum voluptas neque
        debitis quis.
      </p>
      <b>The end</b>
    </CustomContainer>
  );
};
