import {
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType,
} from 'graphql';
import TopicType from './TopicType';
import { getTopics, saveTopic } from './TopicLoader';

export const queries = {
  getTopics: {
    type: GraphQLList(TopicType),
    resolve: getTopics,
  },
};

export const mutations = {
  saveTopic: {
    type: TopicType,
    resolve: saveTopic,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'TopicInput',
          fields: {
            name: {
              type: GraphQLString,
            },
            description: {
              type: GraphQLString,
            },
            votes: {
              type: GraphQLInt,
            },
          },
        }),
      },
    },
  },
};
