import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, CalendarDays, Play } from 'lucide-react';

const Blog = () => {
  // Blog posts data
  const posts = [
    
    {
      id: 1,
      title: 'Feature Matching Using Data Structures: Dating Interface Implementation',
      excerpt: 'Advanced dating interface leveraging hash tables and linked lists to optimize user compatibility and engagement. The platform integrates psychological assessment for enhanced match accuracy.',
      image: 'ds.jpg',
      category: 'Data Structures',
      date: 'May 10, 2023',
      readTime: '15:30 min watch',
      videoUrl: 'https://youtu.be/NgPlMRwBrwU?feature=shared',
      isVideo: true,
    },
    {
      id: 2,
      title: 'Breast Cancer Detection System: Machine Learning Implementation',
      excerpt: 'Cancer prediction system utilizing Pandas for data preprocessing, implementing Logistic Regression, SVM, and Random Forest models achieving 97% accuracy, with a user-friendly Tkinter GUI.',
      image: 'bc.jpg',
      category: 'Machine Learning',
      date: 'Apr 15, 2023',
      readTime: '12:45 min watch',
      videoUrl: 'https://youtu.be/ZRLmUZ4y8EQ?feature=shared',
      isVideo: true,
    },
    {
      id: 4,
      title: 'Kadapa: The Land of Minerals and Energy',
      excerpt: 'Kadapa district, located in the Rayalaseema region of Andhra Pradesh, is known for its rich mineral resources and significant contributions to India\'s energy sector. This blog delves into the district\'s geological importance, highlighting its vast reserves of uranium, barytes, limestone, and asbestos.',
      image: 'kp.webp',
      category: 'Geography',
      date: 'Feb 28, 2025',
      readTime: '8 min read',
      isVideo: false,
      blogUrl: 'https://cuddapah-geostudy.blogspot.com/2025/02/kadapa-land-of-minerals-energy.html',
    },
   
  ];

  return (
    <section id="blog" className="section-padding bg-gradient-to-b from-background to-background/95">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-accent mb-2">Latest Articles</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">My Blog</span>
          </h3>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            I share my knowledge and insights about programming, development,
            and technology through my blog posts and videos.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="glass-card rounded-xl overflow-hidden interactive-card"
            >
              {/* Post Image or Video Thumbnail */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                {post.image ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                    {post.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-primary/80 rounded-full p-3">
                          <Play size={24} className="text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                    Blog Post Image
                  </div>
                )}
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-primary/80 hover:bg-primary text-foreground">
                  {post.category}
                </Badge>
              </div>
              
              {/* Post Content */}
              <div className="p-6 space-y-4">
                {/* Meta info */}
                <div className="flex items-center text-foreground/60 text-sm gap-4">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                {/* Title and Excerpt */}
                <div>
                  <h4 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
                    <a href={post.isVideo ? post.videoUrl : (post.blogUrl || `#blog-${post.id}`)} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </h4>
                  <p className="text-foreground/70 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                {/* Read More Link */}
                <div className="pt-2">
                  <a 
                    href={post.isVideo ? post.videoUrl : (post.blogUrl || `#blog-${post.id}`)} 
                    className="text-accent hover:text-accent/80 flex items-center gap-1 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.isVideo ? "Watch Video" : "Read More"}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Posts */}
        <div className="text-center mt-12">
          <Button variant="outline" className="neon-border gap-2">
            View All Posts
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
