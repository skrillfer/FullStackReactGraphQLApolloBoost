exports.typeDefs =`
directive @uniqueID(
    username: String
    from: [String] = ["username"]
  ) on OBJECT

type Recipe {
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    username: String
}

type User @uniqueID{
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Recipe]
}
type Query {
    user: User
}
`;