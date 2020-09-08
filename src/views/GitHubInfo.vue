<template>
  <div class="light-content">   
      <div class="text-background">
        <div class="text-accent">
          <div class="text-container">
            <h1>
              Github Repositories
            </h1>
            <div v-if="!isLoading" class="github-repo-table">
              <table>
                <tr>
                  <th>Repository Name</th>
                  <th>Description</th>
                  <th>Owner</th>
                  <th>Is Fork</th>
                  <th>Active</th>
                  <th>Main Language</th>
                  <th>Issues</th>
                </tr>
                <tr v-for="repo in githubRepos" :key="repo.id">
                  <td><a class="black-link" :href="repo.html_url">{{repo.name}}</a></td>
                  <td class="twentyFiveWidth">{{repo.description ? repo.description : "-"}}</td>
                  <td><img class="avatar-img" :src="repo.owner.avatar_url">{{repo.owner.login}}</td>
                  <td>
                    {{ repo.fork ? "Yes" : "No" }}
                  </td> 
                  <td>
                    {{ repo.archived ? "No" : "Yes" }}
                    <svg width='6' height='6'>
                      <circle cx='3' cy='3' r='3' :fill="repo.archived ? 'red' : 'green'"></circle>
                    </svg>
                  </td>
                  <td>{{repo.language ? repo.language : "-"}}</td>
                  <td>{{repo.open_issues ? repo.open_issues : "0"}}</td>
                </tr>
              </table>
            </div>
            <div v-else class="github-repo-table">
              <h3>Loading...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'GitHubInfo',
  data() {
    return {
      githubRepos: Object,
      isLoading: false
    }
  },
  created() {
    this.fetchGithubData();
  },
  methods: {
    async fetchGithubData(){
      try {
        this.isLoading = true;
        const response = await axios.get("https://api.github.com/users/bd-g/repos");
        this.githubRepos = response.data;
        this.isLoading = false;
      }
      catch (error) {
          console.log("--- Error loading repo data --- \n" + error);
      }
    },
  },
}

</script>

<style scoped>

* {
  color: black;
}

.black-link {
  color:  black;
  text-decoration: underline;
}

.black-link:hover {
  color: #45A29E;
  text-decoration-color: #45A29E;
}

.avatar-img {
  width: 25px;
  text-align: right;
}

@media only screen and (max-width: 959px) {
  .github-repo-table {
    margin: 30px 0 30px;
  }

  /* Force table to not be like tables anymore */
  table, thead, tbody, th, td, tr { 
    display: block; 
  }
  
  /* Hide table headers (but not display: none;, for accessibility) */
  th { 
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  
  tr { 
    border: 1px solid #ccc; 
  }
  
  td { 
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee; 
    position: relative;
    padding: 10px;
    padding-left: 45%; 
    
  }
  
  td:before { 
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 10px;
    left: 15px;
    width: 40%; 
    padding-right: 10px; 
    white-space: nowrap;
  }
  
  /*
  Label the data
  */
  td:nth-of-type(1):before { content: "Repo Name"; }
  td:nth-of-type(2):before { content: "Description"; }
  td:nth-of-type(3):before { content: "Owner"; }
  td:nth-of-type(4):before { content: "Is Fork"; }
  td:nth-of-type(5):before { content: "Active"; }
  td:nth-of-type(6):before { content: "Main Language"; }
  td:nth-of-type(7):before { content: "Issues"; }
}

/* Desktop Styles */
@media only screen and (min-width: 960px) {
  .github-repo-table {
    width: 90%;
    margin: 40px 0 40px;
  }
  
  .github-repo-table th{ 
    padding: 15px;
    border: 1px solid black;
  }

  .github-repo-table td {
    padding: 15px;
    border-width: 0px 1px 1px 1px;
    border-color: black;
    border-style: solid;
  }

  .twentyFiveWidth {
    width: 25%;
  }
}

  
</style>