async function getNumTransactions(username) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
  // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>

  return username
}

const result = await getNumTransactions('epaga')

console.log(result)
