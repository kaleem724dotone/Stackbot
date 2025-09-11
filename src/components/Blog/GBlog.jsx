import React from "react";
import { blogPosts } from "../../data/blogPost";
import { Card, Row, Col, Avatar, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const FeaturedPostCard = ({ post }) => (
  <Card
    hoverable
    className="mb-8"
    bodyStyle={{ padding: 24 }}
    style={{ borderRadius: 16 }}
  >
    <Row gutter={[24, 24]} align="middle">
      <Col xs={24} md={12}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full  md:h-80 object-cover rounded-md"
        />
      </Col>
      <Col xs={24} md={12}>
        <Title level={3}>{post.title}</Title>
        <Paragraph ellipsis={{ rows: 3 }}>{post.description}</Paragraph>
        <div className="flex items-center gap-4">
          <Avatar src={post.userAvatar} />
          <Text>{post.userName}</Text>
          <Text type="secondary">• {post.date}</Text>
        </div>
      </Col>
    </Row>
  </Card>
);

const BlogPostCard = ({ post }) => (
  <Card
    hoverable
    cover={<img alt={post.title} src={post.image} className="h-48 object-cover" />}
    style={{ borderRadius: 16 }}
  >
    <Title level={5} ellipsis={{ rows: 2 }}>
      {post.title}
    </Title>
    <div className="flex items-center gap-2 text-gray-500 text-sm">
      <Avatar size={24} src={post.userAvatar} />
      <Text>{post.userName}</Text>
      <Text type="secondary">• {post.date}</Text>
      <Text type="secondary">• {post.time}</Text>
    </div>
  </Card>
);

export const BlogShowcase = ({
  title,
  posts = blogPosts,
  filterType = "featured",
  show = "yes", // controls FeaturedPostCard only
}) => {
  const filteredPosts = posts.filter((p) => p.type === filterType);

  if (filteredPosts.length === 0) {
    return (
      <section className="mx-12">
        <Title level={2}>{title}</Title>
        <Paragraph>No posts to display in this section.</Paragraph>
      </section>
    );
  }

  const mainPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <section className="mx-12 my-16">
      <header className="mb-8">
        <Title level={2}>{title}</Title>
      </header>

      <main>
        {/* Featured post */}
        {show === "yes" && <FeaturedPostCard post={mainPost} />}

        {/* Other posts grid */}
        {otherPosts.length > 0 && (
          <Row gutter={[24, 24]}>
            {otherPosts.map((post) => (
              <Col xs={24} sm={12} lg={8} key={post.id}>
                <BlogPostCard post={post} />
              </Col>
            ))}
          </Row>
        )}
      </main>
    </section>
  );
};
