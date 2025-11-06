import loginCadastroUsuarioServRest from "./PreencherFormularioCadastroUsuario";
import ClicarNoBotaoCadastrar from "./ClicarNoBotaoCadastrar";
import MensagemCadastroSucesso from "./MensagemCadastroSucesso";
import loginUsuario from "./PreencherLogin";
import ClicarNoBotaoEntrar from "./ClicarNoBotaoEntrar";

const FormUtils = {
   ...loginCadastroUsuarioServRest,
   ...ClicarNoBotaoCadastrar,
   ...MensagemCadastroSucesso,
   ...loginUsuario,
   ...ClicarNoBotaoEntrar
};

export default FormUtils;