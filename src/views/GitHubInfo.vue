<template>
  <div class="light-content">   
      <div class="text-background">
        <div class="text-accent">
          <div class="text-container">
            <h2>
              Github Repositories
            </h2>
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
            </table>
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
      githubData: Object
    }
  },
  created() {
    this.fetchGithubData();
  },
  methods: {
    async fetchGithubData(){
      try {
        const axiosInstance = axios.create({
          baseURL: "https://api.github.com/users/bd-g/repos",
          timeout: 1000,
          headers: { 'Accept': 'application/vnd.github.v3+json' }
        });

        let response = axiosInstance.get("/");

        this.githubData = await response.data;
        console.log(this.githubData)
      }
      catch (error) {
          console.log("--- Error loading repo data --- \n" + error);
      }
    },
    createRepoRow(data){
      let tr = document.createElement("tr");

      let nameTd = document.createElement("td");
      let nameA = document.createElement("a");
      nameA.setAttribute("href", data["html_url"]);
      nameA.setAttribute("class", "black-link");
      let name = document.createTextNode(data["name"]);
      nameA.appendChild(name);
      nameTd.appendChild(nameA);

      let descriptionTd = this.createNode("td", data["description"]);
      descriptionTd.setAttribute("class", "twentyFiveWidth");

      let ownerTd = document.createElement("td");
      let ownerAvatar = document.createElement("img");
      ownerAvatar.setAttribute("src", data["owner"]["avatar_url"]);
      ownerAvatar.setAttribute("class", "avatar-img");
      ownerTd.appendChild(ownerAvatar);
      let owner = document.createTextNode(data["owner"]["login"]);
      ownerTd.appendChild(owner);
      ownerTd.setAttribute("style", "white-space: nowrap; overflow: hidden;");
      
      let forkedTd = this.createNode("td", data["fork"]);

      let activeTd = document.createElement("td");
      activeTd.innerHTML = 
          this.yesOrNo(!data['archived']) +
          " <svg width='6' height='6'><circle cx='3' cy='3' r='3' fill='" + ((!data['archived']) ? "green" : "red")
             + "'></circle></svg>";

      let languagesTd = this.createNode("td", data["language"]);

      let issuesTd = this.createNode("td", data["open_issues"]);


      tr.appendChild(nameTd);
      tr.appendChild(descriptionTd);
      tr.appendChild(ownerTd);
      tr.appendChild(forkedTd);
      tr.appendChild(activeTd);
      tr.appendChild(languagesTd);
      tr.appendChild(issuesTd);

      return tr;
    },
    
    yesOrNo(bool){
        if (bool){
            return "Yes";
        }
        return "No";
    },

    createHeader(){
        let tr = document.createElement("tr");

        tr.appendChild(this.createNode("th", "Repository Name"));
        tr.appendChild(this.createNode("th", "Description"));
        tr.appendChild(this.createNode("th", "Owner"));
        tr.appendChild(this.createNode("th", "Is Fork"));
        tr.appendChild(this.createNode("th", "Active"));
        tr.appendChild(this.createNode("th", "Main Language"));
        tr.appendChild(this.createNode("th", "Issues"));
        return tr;
    },

    createNode(nodeType, nodeText){
        let t = document.createElement(nodeType);
        let text = document.createTextNode(nodeText);
        t.appendChild(text);
        return t;
    },
  },
}

</script>


<style scoped>

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
  
  .github-repo-table th, .github-repo-table td {
    padding: 15px;
    border: 1px solid black;
  }
}

  
</style>