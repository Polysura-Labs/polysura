import tweepy
import facebook
import requests

class SocialMediaPRAgent:
    def __init__(self, twitter_api_key, twitter_api_secret_key, twitter_access_token, twitter_access_token_secret,
                 facebook_access_token, linkedin_access_token):
        self.twitter_api_key = twitter_api_key
        self.twitter_api_secret_key = twitter_api_secret_key
        self.twitter_access_token = twitter_access_token
        self.twitter_access_token_secret = twitter_access_token_secret
        self.facebook_access_token = facebook_access_token
        self.linkedin_access_token = linkedin_access_token

        self.twitter_client = self.authenticate_twitter()
        self.facebook_client = self.authenticate_facebook()

    def authenticate_twitter(self):
        auth = tweepy.OAuthHandler(self.twitter_api_key, self.twitter_api_secret_key)
        auth.set_access_token(self.twitter_access_token, self.twitter_access_token_secret)
        return tweepy.API(auth)

    def authenticate_facebook(self):
        return facebook.GraphAPI(access_token=self.facebook_access_token, version="3.1")

    def post_to_twitter(self, message):
        try:
            self.twitter_client.update_status(status=message)
            print("Successfully posted to Twitter")
        except Exception as e:
            print(f"Error posting to Twitter: {e}")

    def post_to_facebook(self, message):
        try:
            self.facebook_client.put_object(parent_object='me', connection_name='feed', message=message)
            print("Successfully posted to Facebook")
        except Exception as e:
            print(f"Error posting to Facebook: {e}")

    def post_to_linkedin(self, message):
        try:
            headers = {
                'Authorization': f'Bearer {self.linkedin_access_token}',
                'Content-Type': 'application/json',
                'x-li-format': 'json'
            }
            payload = {
                "content": {
                    "title": "Post Title",
                    "description": message,
                    "submitted-url": "https://www.example.com",
                    "submitted-image-url": "https://www.example.com/image.jpg"
                },
                "visibility": {
                    "code": "anyone"
                }
            }
            response = requests.post('https://api.linkedin.com/v1/people/~/shares', headers=headers, json=payload)
            if response.status_code == 201:
                print("Successfully posted to LinkedIn")
            else:
                print(f"Error posting to LinkedIn: {response.status_code}")
        except Exception as e:
            print(f"Error posting to LinkedIn: {e}")

    def post_update(self, message):
        self.post_to_twitter(message)
        self.post_to_facebook(message)
        self.post_to_linkedin(message)

# Example usage
if __name__ == "__main__":
    agent = SocialMediaPRAgent(
        twitter_api_key='your_twitter_api_key',
        twitter_api_secret_key='your_twitter_api_secret_key',
        twitter_access_token='your_twitter_access_token',
        twitter_access_token_secret='your_twitter_access_token_secret',
        facebook_access_token='your_facebook_access_token',
        linkedin_access_token='your_linkedin_access_token'
    )
    agent.post_update("This is a test message for all social media platforms.")