import { CustomMenu } from "@components/shared/custom-menu";
import { Wrapper, DashboardContainer, Title } from "./styles";
import { Hero } from "./hero";
import { CONSTANTS } from "@utils/index";
import { useAppSelector } from "@store/config";

export const Dashboard = () => {
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);
  return (
    <DashboardContainer>
      <Hero />
      <Wrapper>
        <Title>{CONSTANTS.TRANSLATE[language.value].weRecommend}</Title>
        <CustomMenu
          {...{
            menuItems: [
              {
                id: crypto.randomUUID(),
                title: "american classic",
                category: "lunch",
                price: 12.99,
                img: "./images/item-8.jpeg",
                desc: "",
              },
              {
                id: crypto.randomUUID(),
                title: "quarantine buddy",
                category: "shakes",
                price: 16.99,
                img: "./images/item-9.jpeg",
                desc: "",
              },
            ],
          }}
        />
        <h3>Why us?</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
          perferendis explicabo atque tempore error veniam veritatis? Hic facere
          at ipsum, dicta assumenda veritatis dolore facilis eum quasi repellat.
          Odit, laboriosam! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Animi minus commodi voluptatibus error itaque reprehenderit
          quidem beatae, omnis cumque quo architecto vero, sunt a tempora iure
          voluptate! Impedit, provident! Perspiciatis laudantium quidem tenetur
          officiis quod accusamus nemo vel odio quo harum molestiae porro, ad
          ducimus provident accusantium dolore ex. Odio quasi, maiores fuga
          quaerat obcaecati nisi neque cupiditate natus provident quo eum ipsum
          aut vero dicta laboriosam quisquam doloremque, id fugit ipsam vitae
          voluptatum perspiciatis alias dignissimos! Optio nisi veniam provident
          earum modi voluptatum id nihil molestiae ab. Voluptates perspiciatis,
          impedit eos molestias, sit enim at aspernatur sunt eligendi aperiam
          architecto quod totam maxime aut sed? Earum tenetur eos assumenda iure
          atque ipsum distinctio facere nesciunt dolore id! Eos molestiae
          voluptatem esse, quia recusandae dolore ipsa perferendis laudantium
          tempora consequatur tempore ex, nulla, iure explicabo velit non
          accusamus aliquid alias facere totam dolorum placeat? Veniam ipsa
          velit ad autem, minima eum expedita ut possimus dolor? Laborum porro
          repudiandae quia quas commodi eaque maxime ducimus debitis saepe?
          Eaque, ducimus. Amet fugiat ipsa libero dicta est. Perspiciatis
          quisquam ratione voluptates facere molestiae delectus dolorum eligendi
          recusandae nesciunt totam dolorem in, suscipit cumque laborum
          assumenda aliquid architecto ut omnis beatae quaerat aperiam tempora a
          est consequuntur! Delectus commodi, soluta expedita, accusamus odio
          vitae dolorum quaerat, repudiandae nostrum vero iure tempora nisi nemo
          velit blanditiis. Consectetur harum eaque possimus rem, ratione
          distinctio officiis facilis vitae sint fuga minima, quaerat eos?
          Officia facilis dignissimos, quis tempora incidunt possimus, nesciunt
          aliquam quo molestiae debitis veritatis doloremque, delectus quos
          commodi. Facilis, provident? Repudiandae at iure facere temporibus?
          Ipsam quisquam porro odio, voluptatem eligendi a repudiandae at
          deleniti natus corrupti fugit necessitatibus, ea architecto beatae
          ullam odit sint alias. Similique laudantium provident rem aliquam
          quasi vel magnam vero atque asperiores maiores, pariatur, sunt dolor
          quibusdam ab culpa perferendis velit. Cum deserunt suscipit
          necessitatibus unde voluptas, repellendus facere delectus quam
          blanditiis nostrum maiores cupiditate minus reiciendis perferendis
          mollitia corporis accusamus dolores soluta molestias consectetur ea.
          Nihil id dolorem ipsa laborum nemo corrupti dolorum cumque cupiditate,
          nostrum incidunt sunt, enim impedit rerum doloribus blanditiis
          explicabo similique, eaque error! Eaque at sequi quaerat. Repudiandae,
          commodi enim.
        </p>
        <h4>Where we are?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sed
          optio esse at nostrum earum doloribus vel quod reprehenderit odio
          delectus omnis, minima a pariatur quas tempora dolorum unde fugit.
        </p>
      </Wrapper>
    </DashboardContainer>
  );
};
