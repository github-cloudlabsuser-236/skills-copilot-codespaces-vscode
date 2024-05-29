# Login to Azure
Connect-AzAccount

# Select the subscription to use
$subscriptionId = "<Your-Azure-Subscription-Id>"
Select-AzSubscription -SubscriptionId $subscriptionId

# Set the resource group and deployment parameters
$resourceGroupName = "<Your-Resource-Group-Name>"
$storageAccountName = "<Your-Storage-Account-Name>"
$location = "<Your-Location>"

# Set the path to the ARM template
$templateFilePath = "./arm.json"

# Create a hashtable for the template parameters
$templateParameters = @{
    "storageAccountName" = $storageAccountName
    "location" = $location
}

# Deploy the ARM template
New-AzResourceGroupDeployment -ResourceGroupName $resourceGroupName -TemplateFile $templateFilePath -TemplateParameterObject $templateParameters