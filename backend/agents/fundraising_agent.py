class FundraisingAgent:
    def __init__(self, investors, nft_projects):
        self.investors = investors
        self.nft_projects = nft_projects

    def match_investors_to_projects(self):
        matches = []
        for investor in self.investors:
            for project in self.nft_projects:
                if self.is_match(investor, project):
                    matches.append((investor, project))
        return matches

    def is_match(self, investor, project):
        # Implement your matching logic here
        # For example, match based on investment amount and project funding needs
        return investor['investment_amount'] >= project['funding_needed']

# Example usage
investors = [
    {'name': 'Investor A', 'investment_amount': 10000},
    {'name': 'Investor B', 'investment_amount': 5000},
]

nft_projects = [
    {'name': 'Project X', 'funding_needed': 8000},
    {'name': 'Project Y', 'funding_needed': 3000},
]

agent = FundraisingAgent(investors, nft_projects)
matches = agent.match_investors_to_projects()
for match in matches:
    print(f"Investor {match[0]['name']} matched with project {match[1]['name']}")