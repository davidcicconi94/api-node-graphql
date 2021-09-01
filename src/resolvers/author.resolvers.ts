import { Mutation, Arg, Resolver, InputType, Field } from "type-graphql";
import { Author } from "../entity/author.entities";

// Propiedades del input para ser pasadas en el argumento de @Arg
@InputType()
class AuthorInput {
  @Field()
  fullname!: string;
}

@Resolver()
export class AuthorResolver {
  @Mutation(() => Author)
  async createAuthor(@Arg("input", () => AuthorInput) input: AuthorInput) {}
}
