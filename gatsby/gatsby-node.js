import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
  // get template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  // query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  console.log(data);
  // loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach((pizza) => {
    console.log('creating a page for', pizza.name);
    actions.createPage({
      // what is the url
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  //   create pages dynamically
  // pizzas
  await turnPizzasIntoPages(params);
  // toppings
  // slice masters
}
