const data = [
  {
    question: "Which AWS service is best for hosting a static website?",
    incorrectAnswers: ["Amazon EC2", "AWS Lambda", "Amazon RDS"],
    correctAnswer: "Amazon S3",
  },
  {
    question:
      "A company wants to ensure high availability for their application hosted on EC2 instances. Which AWS service should they use?",
    incorrectAnswers: ["Amazon S3", "AWS Lambda", "Amazon RDS"],
    correctAnswer: "Elastic Load Balancer",
  },
  {
    question: "Which AWS service provides a fully managed NoSQL database?",
    incorrectAnswers: ["Amazon RDS", "Amazon Redshift", "Amazon Aurora"],
    correctAnswer: "Amazon DynamoDB",
  },
  {
    question: "What is the primary purpose of an Amazon VPC?",
    incorrectAnswers: [
      "To store large amounts of unstructured data",
      "To provide a serverless computing platform",
      "To manage DNS records",
    ],
    correctAnswer: "To create a private, isolated section of the AWS Cloud",
  },
  {
    question:
      "Which AWS service is used to monitor and log API calls made within an AWS account?",
    incorrectAnswers: ["Amazon CloudWatch", "AWS Config", "AWS X-Ray"],
    correctAnswer: "AWS CloudTrail",
  },
  {
    question:
      "A company wants to migrate a large amount of data to AWS quickly and securely. Which service should they use?",
    incorrectAnswers: [
      "AWS Direct Connect",
      "Amazon S3 Transfer Acceleration",
      "AWS Storage Gateway",
    ],
    correctAnswer: "AWS Snowball",
  },
  {
    question:
      "Which AWS service is best suited for running containerized applications without managing the underlying infrastructure?",
    incorrectAnswers: ["Amazon EC2", "AWS Lambda", "Amazon ECS"],
    correctAnswer: "AWS Fargate",
  },
  {
    question:
      "What is the primary benefit of using Amazon RDS Multi-AZ deployments?",
    incorrectAnswers: [
      "Improved read performance",
      "Cost savings",
      "Automatic scaling",
    ],
    correctAnswer: "High availability and fault tolerance",
  },
  {
    question:
      "Which AWS service is used to protect applications from DDoS attacks?",
    incorrectAnswers: ["AWS WAF", "AWS Shield Advanced", "AWS GuardDuty"],
    correctAnswer: "AWS Shield",
  },
  {
    question:
      "A company wants to reduce costs by using a storage class that is optimized for infrequently accessed data. Which Amazon S3 storage class should they use?",
    incorrectAnswers: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 Glacier Deep Archive",
    ],
    correctAnswer: "S3 Standard-Infrequent Access (S3 Standard-IA)",
  },
  {
    question:
      "Which AWS service is used to automate infrastructure deployment and management?",
    incorrectAnswers: [
      "AWS CloudFormation",
      "AWS OpsWorks",
      "AWS Elastic Beanstalk",
    ],
    correctAnswer: "AWS CloudFormation",
  },
  {
    question: "What is the primary purpose of AWS IAM?",
    incorrectAnswers: [
      "To monitor and log API calls",
      "To provide a serverless computing platform",
      "To manage DNS records",
    ],
    correctAnswer: "To manage access to AWS services and resources securely",
  },
  {
    question:
      "Which AWS service is used to deliver content to users with low latency and high transfer speeds?",
    incorrectAnswers: [
      "Amazon S3",
      "AWS Global Accelerator",
      "Amazon Route 53",
    ],
    correctAnswer: "Amazon CloudFront",
  },
  {
    question:
      "A company wants to ensure that their application can handle sudden spikes in traffic. Which AWS service should they use?",
    incorrectAnswers: ["Amazon EC2", "Amazon RDS", "AWS Lambda"],
    correctAnswer: "AWS Auto Scaling",
  },
  {
    question:
      "Which AWS service is used to manage and deploy serverless applications?",
    incorrectAnswers: ["Amazon EC2", "AWS Fargate", "Amazon ECS"],
    correctAnswer: "AWS Lambda",
  },
  {
    question: "What is the primary purpose of Amazon Route 53?",
    incorrectAnswers: [
      "To provide a serverless computing platform",
      "To manage access to AWS services",
      "To monitor and log API calls",
    ],
    correctAnswer: "To manage DNS and domain name registration",
  },
  {
    question:
      "Which AWS service is used to analyze and visualize logs and metrics?",
    incorrectAnswers: ["AWS CloudTrail", "AWS X-Ray", "AWS Config"],
    correctAnswer: "Amazon CloudWatch",
  },
  {
    question:
      "A company wants to ensure that their data is encrypted at rest. Which AWS service should they use?",
    incorrectAnswers: ["AWS KMS", "AWS IAM", "AWS CloudTrail"],
    correctAnswer: "AWS KMS",
  },
  {
    question:
      "Which AWS service is used to create and manage virtual networks?",
    incorrectAnswers: [
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS Global Accelerator",
    ],
    correctAnswer: "Amazon VPC",
  },
  {
    question: "What is the primary purpose of AWS Elastic Beanstalk?",
    incorrectAnswers: [
      "To manage DNS records",
      "To provide a serverless computing platform",
      "To monitor and log API calls",
    ],
    correctAnswer: "To deploy and manage applications easily",
  },
  {
    question:
      "Which AWS service is used to manage and deploy containerized applications?",
    incorrectAnswers: ["AWS Lambda", "AWS Fargate", "Amazon EC2"],
    correctAnswer: "Amazon ECS",
  },
  {
    question:
      "A company wants to ensure that their application is highly available across multiple regions. Which AWS service should they use?",
    incorrectAnswers: ["Amazon S3", "AWS Lambda", "Amazon RDS"],
    correctAnswer: "Amazon Route 53",
  },
  {
    question:
      "Which AWS service is used to manage and deploy serverless applications?",
    incorrectAnswers: ["Amazon EC2", "AWS Fargate", "Amazon ECS"],
    correctAnswer: "AWS Lambda",
  },
  {
    question: "What is the primary purpose of AWS Config?",
    incorrectAnswers: [
      "To monitor and log API calls",
      "To manage access to AWS services",
      "To provide a serverless computing platform",
    ],
    correctAnswer: "To track resource configurations and changes",
  },
  {
    question:
      "Which AWS service is used to analyze and visualize logs and metrics?",
    incorrectAnswers: ["AWS CloudTrail", "AWS X-Ray", "AWS Config"],
    correctAnswer: "Amazon CloudWatch",
  },
  {
    question:
      "A company wants to ensure that their data is encrypted at rest. Which AWS service should they use?",
    incorrectAnswers: ["AWS KMS", "AWS IAM", "AWS CloudTrail"],
    correctAnswer: "AWS KMS",
  },
  {
    question:
      "Which AWS service is used to create and manage virtual networks?",
    incorrectAnswers: [
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS Global Accelerator",
    ],
    correctAnswer: "Amazon VPC",
  },
  {
    question: "What is the primary purpose of AWS Elastic Beanstalk?",
    incorrectAnswers: [
      "To manage DNS records",
      "To provide a serverless computing platform",
      "To monitor and log API calls",
    ],
    correctAnswer: "To deploy and manage applications easily",
  },
  {
    question:
      "Which AWS service is used to manage and deploy containerized applications?",
    incorrectAnswers: ["AWS Lambda", "AWS Fargate", "Amazon EC2"],
    correctAnswer: "Amazon ECS",
  },
  {
    question:
      "A company wants to ensure that their application is highly available across multiple regions. Which AWS service should they use?",
    incorrectAnswers: ["Amazon S3", "AWS Lambda", "Amazon RDS"],
    correctAnswer: "Amazon Route 53",
  },
  {
    question:
      "Which AWS service is used to manage and deploy serverless applications?",
    incorrectAnswers: ["Amazon EC2", "AWS Fargate", "Amazon ECS"],
    correctAnswer: "AWS Lambda",
  },
  {
    question: "What is the primary purpose of AWS Config?",
    incorrectAnswers: [
      "To monitor and log API calls",
      "To manage access to AWS services",
      "To provide a serverless computing platform",
    ],
    correctAnswer: "To track resource configurations and changes",
  },
  {
    question:
      "Which AWS service is used to analyze and visualize logs and metrics?",
    incorrectAnswers: ["AWS CloudTrail", "AWS X-Ray", "AWS Config"],
    correctAnswer: "Amazon CloudWatch",
  },
  {
    question:
      "A company wants to ensure that their data is encrypted at rest. Which AWS service should they use?",
    incorrectAnswers: ["AWS KMS", "AWS IAM", "AWS CloudTrail"],
    correctAnswer: "AWS KMS",
  },
  {
    question:
      "Which AWS service is used to create and manage virtual networks?",
    incorrectAnswers: [
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS Global Accelerator",
    ],
    correctAnswer: "Amazon VPC",
  },
  {
    question: "What is the primary purpose of AWS Elastic Beanstalk?",
    incorrectAnswers: [
      "To manage DNS records",
      "To provide a serverless computing platform",
      "To monitor and log API calls",
    ],
    correctAnswer: "To deploy and manage applications easily",
  },
  {
    question:
      "Which AWS service is used to manage and deploy containerized applications?",
    incorrectAnswers: ["AWS Lambda", "AWS Fargate", "Amazon EC2"],
    correctAnswer: "Amazon ECS",
  },
  {
    question:
      "A company wants to ensure that their application is highly available across multiple regions. Which AWS service should they use?",
    incorrectAnswers: ["Amazon S3", "AWS Lambda", "Amazon RDS"],
    correctAnswer: "Amazon Route 53",
  },
  {
    question:
      "Which AWS service is used to manage and deploy serverless applications?",
    incorrectAnswers: ["Amazon EC2", "AWS Fargate", "Amazon ECS"],
    correctAnswer: "AWS Lambda",
  },
  {
    question: "What is the primary purpose of AWS Config?",
    incorrectAnswers: [
      "To monitor and log API calls",
      "To manage access to AWS services",
      "To provide a serverless computing platform",
    ],
    correctAnswer: "To track resource configurations and changes",
  },
  {
    question:
      "Which AWS service is used to analyze and visualize logs and metrics?",
    incorrectAnswers: ["AWS CloudTrail", "AWS X-Ray", "AWS Config"],
    correctAnswer: "Amazon CloudWatch",
  },
  {
    question:
      "A company wants to ensure that their data is encrypted at rest. Which AWS service should they use?",
    incorrectAnswers: ["AWS KMS", "AWS IAM", "AWS CloudTrail"],
    correctAnswer: "AWS KMS",
  },
  {
    question:
      "Which AWS service is used to create and manage virtual networks?",
    incorrectAnswers: [
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS Global Accelerator",
    ],
    correctAnswer: "Amazon VPC",
  },
  {
    question: "What is the primary purpose of AWS Elastic Beanstalk?",
    incorrectAnswers: [
      "To manage DNS records",
      "To provide a serverless computing platform",
      "To monitor and log API calls",
    ],
    correctAnswer: "To deploy and manage applications easily",
  },
  {
    question:
      "Which AWS service is used to manage and deploy containerized applications?",
    incorrectAnswers: ["AWS Lambda", "AWS Fargate", "Amazon EC2"],
    correctAnswer: "Amazon ECS",
  },
  {
    question:
      "A company wants to ensure that their application is highly available across multiple regions. Which AWS service should they use?",
    incorrectAnswers: ["Amazon S3", "AWS Lambda", "Amazon RDS"],
    correctAnswer: "Amazon Route 53",
  },
  {
    question:
      "Which AWS service is used to manage and deploy serverless applications?",
    incorrectAnswers: ["Amazon EC2", "AWS Fargate", "Amazon ECS"],
    correctAnswer: "AWS Lambda",
  },
  {
    question: "What is the primary purpose of AWS Config?",
    incorrectAnswers: [
      "To monitor and log API calls",
      "To manage access to AWS services",
      "To provide a serverless computing platform",
    ],
    correctAnswer: "To track resource configurations and changes",
  },
  {
    question:
      "Which AWS service is used to analyze and visualize logs and metrics?",
    incorrectAnswers: ["AWS CloudTrail", "AWS X-Ray", "AWS Config"],
    correctAnswer: "Amazon CloudWatch",
  },
  {
    question:
      "A company wants to ensure that their data is encrypted at rest. Which AWS service should they use?",
    incorrectAnswers: ["AWS KMS", "AWS IAM", "AWS CloudTrail"],
    correctAnswer: "AWS KMS",
  },
  {
    question:
      "Which AWS service is used to create and manage virtual networks?",
    incorrectAnswers: [
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS Global Accelerator",
    ],
    correctAnswer: "Amazon VPC",
  },
  {
    question: "What is the primary purpose of AWS Elastic Beanstalk?",
    incorrectAnswers: [
      "To manage DNS records",
      "To provide a serverless computing platform",
      "To monitor and log API calls",
    ],
    correctAnswer: "To deploy and manage applications easily",
  },
  {
    question:
      "Which AWS service is used to manage and deploy containerized applications?",
    incorrectAnswers: ["AWS Lambda", "AWS Fargate", "Amazon EC2"],
    correctAnswer: "Amazon ECS",
  },
  {
    question:
      "A company wants to ensure that their application is highly available across multiple regions. Which AWS service should they use?",
    incorrectAnswers: ["Amazon S3", "AWS Lambda", "Amazon RDS"],
    correctAnswer: "Amazon Route 53",
  },
  {
    question:
      "Which AWS service is used to manage and deploy serverless applications?",
    incorrectAnswers: ["Amazon EC2", "AWS Fargate", "Amazon ECS"],
    correctAnswer: "AWS Lambda",
  },
  {
    question: "What is the primary purpose of AWS Config?",
    incorrectAnswers: [
      "To monitor and log API calls",
      "To manage access to AWS services",
      "To provide a serverless computing platform",
    ],
    correctAnswer: "To track resource configurations and changes",
  },
  {
    question:
      "Which AWS service is used to analyze and visualize logs and metrics?",
    incorrectAnswers: ["AWS CloudTrail", "AWS X-Ray", "AWS Config"],
    correctAnswer: "Amazon CloudWatch",
  },
  {
    question:
      "A company wants to ensure that their data is encrypted at rest. Which AWS service should they use?",
    incorrectAnswers: ["AWS KMS", "AWS IAM", "AWS CloudTrail"],
    correctAnswer: "AWS KMS",
  },
  {
    question:
      "Which AWS service is used to create and manage virtual networks?",
    incorrectAnswers: [
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS Global Accelerator",
    ],
    correctAnswer: "Amazon VPC",
  },
  {
    question: "What is the primary purpose of AWS Elastic Beanstalk?",
    incorrectAnswers: [
      "To manage DNS records",
      "To provide a serverless computing platform",
      "To monitor and log API calls",
    ],
    correctAnswer: "To deploy and manage applications easily",
  },
  {
    question:
      "Which AWS service is used to manage and deploy containerized applications?",
    incorrectAnswers: ["AWS Lambda", "AWS Fargate", "Amazon EC2"],
    correctAnswer: "Amazon ECS",
  },
  {
    question:
      "A company wants to ensure that their application is highly available across multiple regions. Which AWS service should they use?",
    incorrectAnswers: ["Amazon S3", "AWS Lambda", "Amazon RDS"],
    correctAnswer: "Amazon Route 53",
  },
  {
    question:
      "Which AWS service is used to manage and deploy serverless applications?",
    incorrectAnswers: ["Amazon EC2", "AWS Fargate", "Amazon ECS"],
    correctAnswer: "AWS Lambda",
  },
  {
    question: "What is the primary purpose of AWS Config?",
    incorrectAnswers: [
      "To monitor and log API calls",
      "To manage access to AWS services",
      "To provide a serverless computing platform",
    ],
    correctAnswer: "To track resource configurations and changes",
  },
  {
    question:
      "Which AWS service is used to analyze and visualize logs and metrics?",
    incorrectAnswers: ["AWS CloudTrail", "AWS X-Ray", "AWS Config"],
    correctAnswer: "Amazon CloudWatch",
  },
];

export default data;
