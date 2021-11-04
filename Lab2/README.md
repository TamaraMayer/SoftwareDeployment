# DevOps Pipeline

Build using the DevOps Template.

WebApp Develop/Test: https://lab2webapptm.azurewebsites.net/

WebApp Release: https://lab2webapptm-release.azurewebsites.net/


Screenshot Pipeline
![Screenshot Pipeline](https://github.com/TamaraMayer/SoftwareDeployment/blob/main/Lab2/Images/image-20211104212203770.png)



Screenshot Deployment

![alt text](C:\Users\tamar\Desktop\Git\SoftwareDeployment\Lab2\Images\image-20211104212309979.png)



Screenshot Release Deployment

![](C:\Users\tamar\Desktop\Git\SoftwareDeployment\Lab2\Images\image-20211104212359887.png)



## Releases Freigeben

Auf der InitialDev WebApp wird jeder commit, der erfolgreich durch die Pipeline durchläuft, automatisch freigegeben.

Auf der Release WebApp muss ein Release manuell gemacht werden. In Tab "Releases" die Release App auswählen (Lab2WebappTM-Release in diesem Fall), dann rechts oben auf den blauen Button "Create release" drücken. Hier kann man dann unter Artefacts auswählen welcher Release der InitialDev WebApp released werden soll, und zuletzt auf Create klicken. Warten bis alles durchgelaufen ist, und fertig.
