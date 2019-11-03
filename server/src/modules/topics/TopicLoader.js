import Topic from './TopicModel';

export async function saveTopic(_, { input }) {
  const topic = await Topic.create(input);
  return topic;
}

export async function getTopics() {
  const topics = await Topic.find();
  return topics;
}
