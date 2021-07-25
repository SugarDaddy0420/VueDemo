let demotable = {
    template:`
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First</th>
      <th scope="col">Email</th>
      
    </tr>
  </thead>

  <tbody>
    <tr v-for="(item,index) in listData">
      
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.email}}</td>
    </tr>
    
  </tbody>
</table>
`,

    
    data(){
        return{
            listData: data
        }
    },
    created(){},
}