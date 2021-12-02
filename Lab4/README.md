# Lab 4

Die Aufgabe war:

- Aufestezen und Konfiguration eines AKS in Azure

- Konfiguration und deplyoment von Wordpress incl. MySQL in dem AKS cluster. 

URL: http://20.61.228.123

### Cluster in Azure

![image](https://user-images.githubusercontent.com/65136014/144471311-ac850783-4f3d-446b-88e4-bd0df55c9999.png)

![image](https://user-images.githubusercontent.com/65136014/144471551-0975e9bc-4b39-4d10-bc3a-3830b14629a7.png)

### Deployment

- az group create --location azure_region --name name_of_resource_group
- az aks get-versions --location region_name 
- az aks create --resource-group name_of_resource_group --name name_of_aks_cluster --node-count 2 --kubernetes-version <desired version> (kubernetes-version is optional)
- az aks show --name name_of_aks_cluster --resource-group name_of_resource_group
- az aks get-credentials --name name_of_aks_cluster --resource-group name_of_resource_group
- kubectl get nodes
- az mysql flexible-server create --public-access <YOUR-IP-ADDRESS>
- kubectl apply -f <FILENAME>.yaml
- kubectl get service php-svc --watch
