exports.typeDefs =`
directive @uniqueID(
    username: String
    from: [String] = ["username"]
  ) on OBJECT

type Recipe {
    _id: ID
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    username: String
}

type User @uniqueID{
    _id: ID
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Recipe]
}

type Query {
    getAllRecipes: [Recipe]
}

type Token {
    token: String!
}

type Mutation  {
    addRecipe(name:String!, 
        description:String!, 
        category:String!,
        instructions: String!,
        username: String): Recipe

    signupUser(
        username: String!, 
        email: String!, 
        password: String!): Token

    signinUser(username: String!, 
        password: String!): Token
}
`;