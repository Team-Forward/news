OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "A solicitação falhou, conexão de rede indisponível!",
    "Request unauthorized. Are you logged in?" : "Solicitação não autorizada. Você está logado?",
    "Request forbidden. Are you an admin?" : "Solicitação proibida. Você é um administrador?",
    "Token expired or app not enabled! Reload the page!" : "Token expirado ou aplicativo não habilitado! Recarregue a página!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Erro interno do servidor! Verifique o arquivo data/nextcloud.log para obter informações adicionais.",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "A solicitação falhou pois o Nextcloud está em modo de manutenção!",
    "News" : "Notícias",
    "An RSS/Atom feed reader" : "Um leitor de RSS/Atom",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "O aplicativo News é um leitor de feed RSS/Atom para o Nextcloud, que pode ser sincronizado com vários dispositivos móveis. Uma lista de todos os clientes e requisitos pode ser encontrada [no README] (https://github.com/nextcloud/news)\n\nAntes de atualizar para uma nova versão, [verifique o changelog] (https://github.com/nextcloud/news/blob/master/CHANGELOG.md) para evitar surpresas.\n\n**Importante**: Para ativar as atualizações de feed, você precisará ativar o [cron do Nextcloud] (https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) ou usar [um atualizador](https://github.com/nextcloud/news-updater) que use a API de atualização incorporada e desabilite as atualizações do cron. Mais informações podem ser encontradas [no README] (https://github.com/nextcloud/news).",
    "Use system cron for updates" : "Usar o sistema Cron para atualizações",
    "Disable this if you run a custom updater such as the Python updater included in the app." : "Desative esta opção se você executar um atualizador personalizado, como o atualizador Python incluído no aplicativo.",
    "Purge interval" : "Limpar intervalo",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored." : "Valor mínimo em segundos após pastas e feeds excluídos serem excluídos do banco de dados; valores abaixo de 60 segundos serão ignorados.",
    "Maximum read count per feed" : "O número máximo de leituras por feed",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off." : "Define a quantidade máxima de artigos que podem ser lidos pelo feed e qual não será excluído pela tarefa de limpeza; se artigos antigos reaparecerem após lidos, aumente este valor; valores negativos tais como -1 irão desativar este recurso.",
    "Maximum redirects" : "Redirecionamentos máximos",
    "How many redirects the feed fetcher should follow." : "Quantos redirecionamentos o alimentador de feed deve seguir.",
    "Feed fetcher timeout" : "Tempo limite do alimentador de feed",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted." : "O número máximo de segundos para esperar por um feed RSS ou Atom carregar; se ele demorar muito a atualização será cancelada.",
    "Explore Service URL" : "Explorar Serviços URL",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty." : "Se fornecido, a URL deste serviço será consultada para exibir os feeds na seção explorar feed. Para voltar ao serviço de exploração integrado, deixe esta entrada vazia.",
    "For more information check the wiki." : "Para mais informações, consulte o wiki.",
    "Update interval" : "Intervalo de atualização",
    "Interval in seconds in which the feeds will be updated." : "Intervalo em segundos em que os feeds serão atualizados.",
    "Saved" : "Salvo",
    "Download" : "Baixar",
    "Close" : "Fechar",
    "Subscribe to" : "Inscrever-se em",
    "No articles available" : "Não há artigos disponíveis",
    "No unread articles available" : "Não há artigos disponíveis não lidos",
    "Open website" : "Abrir website",
    "Star article" : "Destacar artigo",
    "Unstar article" : "Excluir destaque do artigo",
    "Keep article unread" : "Manter artigo não lido",
    "Remove keep article unread" : "Excluir manter artigo não lido",
    "by" : "por",
    "from" : "de",
    "Play audio" : "Reproduzir áudio",
    "Download audio" : "Baixar áudio",
    "Download video" : "Baixar vídeo",
    "Keyboard shortcut" : "Atalhos do teclado",
    "Description" : "Descrição",
    "right" : "direita",
    "Jump to next article" : "Avançar para o próximo artigo",
    "left" : "esquerda",
    "Jump to previous article" : "Voltar para o artigo anterior",
    "Toggle star article" : "Alternar destaque do arquivo",
    "Star article and jump to next one" : "Destacar artigo e ir para próximo",
    "Toggle keep current article unread" : "Alternar manter o presente artigo não lido",
    "Open article in new tab" : "Abrir o artigo em nova aba",
    "Toggle expand article in compact view" : "Alternar expandir artigo na visão compacta",
    "Refresh" : "Atualizar",
    "Load next feed" : "Carregar novo feed",
    "Load previous feed" : "Carregar feed anterior",
    "Load next folder" : "Carregar nova pasta",
    "Load previous folder" : "Carregar pasta anterior",
    "Scroll to active navigation entry" : "Rolar para ativar a navegação",
    "Focus search field" : "Campo de pesquisa de foco",
    "Mark current article's feed/folder read" : "Marcar o feed/pasta atual como lido",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Modo ajax ou webcron detectado! Seus feeds não serão atualizados!",
    "How to set up the operating system cron" : "Como configurar o Cron do sistema operacional",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Instale e configure um atualizador rápido paralelo que usa os novos aplicativos API para atualizar",
    "Subscribe" : "Assinar",
    "Web address" : "Endereço web",
    "Feed exists already!" : "Este feed já existe!",
    "Folder" : "Pasta",
    "No folder" : "Nenhuma pasta",
    "New folder" : "Nova pasta",
    "Folder name" : "Nome da pasta",
    "Go back" : "Retornar",
    "Folder exists already!" : "Esta pasta já existe!",
    "Credentials" : "Credenciais",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "Credenciais Básicas de Autenticação HTTP devem ser armazenadas sem criptografia! Todos com acesso ao servidor ou banco de dados serão capazes de acessá-los!",
    "Username" : "Nome de usuário",
    "Password" : "Senha",
    "New Folder" : "Nova pasta",
    "Create" : "Criar",
    "Explore" : "Explorar",
    "Update failed more than 50 times" : "A atualização falhou mais de 50 vezes",
    "Deleted feed" : "Feed excluído",
    "Undo delete feed" : "Desfazer exclusão de feed",
    "Rename" : "Renomear",
    "Menu" : "Menu",
    "Mark read" : "Marcar como lido",
    "Unpin from top" : "Tirar  destacados no topo",
    "Pin to top" : "Destacados no topo",
    "Newest first" : "Mais recentes primeiro",
    "Oldest first" : "Mais antigos primeiro",
    "Default order" : "Ordem padrão",
    "Enable full text" : "Habilita texto completo",
    "Disable full text" : "Desabiltia texto completo",
    "Unread updated" : "Não lidos atualizados",
    "Ignore updated" : "Ignora atualizado",
    "Open feed URL" : "Abrir a URL do feed",
    "Delete" : "Excluir",
    "Dismiss" : "Rejeitar",
    "Collapse" : "Esconder",
    "Deleted folder" : "Pasta excluída",
    "Undo delete folder" : "Desfazer a exclusão de pasta",
    "Starred" : "Destacado",
    "Unread articles" : "Artigos não lidos",
    "All articles" : "Todos os artigos",
    "Settings" : "Configurações",
    "Disable mark read through scrolling" : "Desativar a marca de lido durante a rolagem",
    "Compact view" : "Versão reduzida",
    "Expand articles on key navigation" : "Expandir artigos sobre tecla de navegação",
    "Show all articles" : "Exibir todos os artigos",
    "Reverse ordering (oldest on top)" : "Ordem inversa (mais antigo no topo)",
    "Subscriptions (OPML)" : "Assinaturas (OPML) ",
    "Import" : "Importar",
    "Export" : "Exportar",
    "Error when importing: File does not contain valid OPML" : "Erro ao importar: Arquivo não contem um OPML válido",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Erro ao importar: OPML não contêm feed nem pastas",
    "Unread/Starred Articles" : "Artigos destacados/não lidos",
    "Error when importing: file does not contain valid JSON" : "Erro ao importar: arquivo não contém um JSON válido",
    "Help" : "Ajuda",
    "Keyboard shortcuts" : "Atalhos de teclado",
    "Documentation" : "Documentação",
    "Report a bug" : "Reportar um erro"
},
"nplurals=2; plural=(n > 1);");
