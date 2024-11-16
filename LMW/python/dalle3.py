# Note: DALL-E 3 requires version 1.0.0 of the openai-python library or later
import os
from openai import AzureOpenAI
import json

client = AzureOpenAI(
    api_version="2024-05-01-preview",
    azure_endpoint="https://lmw-sweden.openai.azure.com/",
    api_key="eb4ef568a38641608d0dafada8603116",
)

result = client.images.generate(
    model="Dalle3", # the name of your DALL-E 3 deployment
    prompt="A couple in the zoo",
    n=1
)

image_url = json.loads(result.model_dump_json())['data'][0]['url']


Kubernetes vs Kubernetes Automatic
Master - Workernode Verhältnis


Cluster-Architektur: Entscheiden Sie, wie viele Master- und Worker-Nodes Ihr Cluster haben soll. 
Ein einzelner Master-Node kann für kleine Cluster ausreichen, aber für Hochverfügbarkeit sind mehrere Master-Nodes empfehlenswert1.

Netzwerk: Wählen Sie ein Netzwerk-Plugin (z.B. Flannel, Calico), das zu Ihren Anforderungen passt. Stellen Sie sicher, dass 
die Netzwerk-Konfiguration konsistent ist und alle Nodes miteinander kommunizieren können.

Sicherheit: Implementieren Sie Sicherheitsmaßnahmen wie Role-Based Access Control (RBAC), Network Policies und Secrets Management, 
um den Zugriff auf den Cluster und die darin laufenden Anwendungen zu kontrollieren.

Speicher: Planen Sie den Speicherbedarf Ihrer Anwendungen und konfigurieren Sie Persistent Volumes (PVs) und 
Persistent Volume Claims (PVCs) entsprechend.

Monitoring und Logging: Richten Sie Monitoring- und Logging-Tools Grafana. Zeigen des Monitorings. --> Alerting

Automatisierung: Nutzen Sie Tools wie Helm für die Verwaltung von Kubernetes-Anwendungen und 
CI/CD-Pipelines, um Deployments zu automatisieren.
Helm ist sowas wir PIP
helm install, helm restart, helm rollback
Q: Nutzen wir azure devops oder azure pipelines?

Backup und Wiederherstellung: Implementieren Sie Strategien für regelmäßige Backups und testen Sie die Wiederherstellung, 
um Datenverlust zu vermeiden.


Allgemeine Fragen:
Abhängigkeiten in der Architektur, zB FSP. Doppelhaltung über Container. Wenn der Fehler auf Container ebene ist?


Wie erreichen wir einen positiven Business Case / sparen wir Kosten? 
KI spezifisch
    Ineffiziente Rollenbilder Intern/extern
IT spezifisch
    Nearshoring,
    CI / CD, Qualitätsabwegung, dauerthema, Zusammenspiel mit euch
    Cloud
    Einkauf und Dienstleistersteuerung
    Architekturvergleiche - PowerBI vs Tableau
PoC zu Produktion Quote; Enbw millionenprojekt; Abschalten; Need based architecture (DZ Hadoop Cluster)
FinOps for GPT
KI für uns selbst

Grummeln
Impediment
entscheidensvorlage
Interessengemeinschaft



Median Tagessatz von 7xx€ netto - x Paneldienstleister und 23% spezialisierten Buden
FinOps
    Umbau unser Prozesse - Beispiel GPT zbi
    Abschalten - Brandwatch
        Lizenzmanagement - Tableau
        DS Arbeitsplätze
Nearshoring - 35% in Visualisierung/Dashboarding; xy% Plattform Team
Automatisierung unser eigenen Prozesse
    
