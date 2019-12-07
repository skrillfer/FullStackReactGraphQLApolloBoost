import { gql } from 'apollo-boost';

export const GET_ALL_RECIPIES = gql`

query {
    getAllRecipes {
        name
        description
        instructions
        category
        likes
        createdDate
    }
}
`;