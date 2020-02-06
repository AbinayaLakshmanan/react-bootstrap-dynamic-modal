### React Bootstrap Dynamic Modal
Add dialogs to your site for lightboxes, user notifications, or completely custom content.

```javascript
import { BasicModal, ConfirmationModal } from "react-bootstrap-dynamic-modal"; 
```
### Basic Modal
Basic modal behaves similar to bootstrap modal

* Default it has the close button and modal body is scrollable.

### Confirmation Modal
Modal would not hide until unless user take an action by clicking buttons. It would not hide by pressing ESC button and clicking outside of the modal.

* Does not have the close button and modal body is scrollable.

### Example
```javascript
function App() {
  const [modalFlag, setModalFlag] = useState(false);
  const [confirmationModalFlag, setConfirmationModalFlag] = useState(false);
  const [errorModalFlag, setErrorModalFlag] = useState(false);
  let basicModalProps = {
    title: "Basic Modal",
    size: 'lg',
    modalClass: 'modal-width',
    bodyClass:'modal-body-bg',
    headerClass:'modal-header-bg',
    isAnimate: false,
    buttons: [
      {
        variant: "secondary",
        handler: () => setModalFlag(false),
        label: "Cancel"
      },
      {
        variant: "primary",
        handler: () => setModalFlag(false),
        label: "Save"
      }
    ],
    onHide: () => setModalFlag(false)
  }

  let confirmationModalProps = {
    title: "Confirmation Modal",
    body: "Are you sure?",
    size: 'xs',
    isAnimate: false,
    buttons: [
      {
        variant: "secondary",
        handler: () => setConfirmationModalFlag(false),
        label: "Cancel"
      },
      {
        variant: "primary",
        handler: () => setConfirmationModalFlag(false),
        label: "Yes"
      }
    ]
  }

  let errorModal = {
    title: "Session Time",
    body: "Your session timeout due to security",
    size: 'xs',
    isAnimate: false,
    buttons: [
      {
        variant: "primary",
        handler: () => setErrorModalFlag(false),
        label: "Logout"
      }
    ],
  }

  return (
    <div className="App">
      <ButtonToolbar>
        <Button variant="primary" onClick={() => setModalFlag(true)}>Modal</Button>
        <Button variant="secondary" onClick={() => setConfirmationModalFlag(true)}>Confirmation Modal</Button>
        <Button variant="success" onClick={() => setErrorModalFlag(true)}>System Error</Button>
      </ButtonToolbar>
      {/* pass visibility flag to show/hide modal */}
      <BasicModal {...{ ...basicModalProps, "visibility": modalFlag }} />
      <ConfirmationModal {...{ ...confirmationModalProps, "visibility": confirmationModalFlag }} />
      <ConfirmationModal {...{ ...errorModal, "visibility": errorModalFlag }} />
    </div>
  );
}
export default App;
```

### Output
[![output1](https://lh3.googleusercontent.com/Tcb0-1VEX_8yinnFj5vR-EHK2Xgm7Z-7CBvh10qmePnLq53-8mXX8uPJe-q4cBn7QN1dFffEmXPulYbgJHBJs2e1wjYwmwTKB4uUaCGNnewt003H4ekmzH8PQVoCkJb7gVaA49CEe4YOr5_cL0F8jUHK_q-_17U3dYjGZCPbmB2knzwRacz6-qZIdaTxzKzPBycWhCxotQ-nETxgKgiDdYR5o85kDidn5YEiauGxKd-aiuKqc5q_sBhnnsyeHsoXFI_blJn83oYtdLQ4TazHnhdBMHJmeFsSRSshRTYrh1FLeJBZcpAXSbRk55eYvpId7MDIqNKytlsG19EFWgIBu1BpRda4v7mcZs_UZxjs7FhjTslLOgheTpiG-246kIqSA8x7RiXUEtGNRUNkuBz6Zink5ntIiVLJP08JMAd0b8O2XvWy2s_lw5s7gnNUU35E_utwL_5G0URtCtza5PAwWOd0NpGU_kIfS7EknAn-9YHCbH5yAx24ZF-Oclcyt3rkfWt6xUeDmTVemAqIDhHa_LD1PFRcpXf9K3cdq7PB93DUAwPCWOMSoL30dlbCGyt80875-Q1-xTgvVx8VodcamluMJ6L33Dt1XYsTPuL_uneRJCdnuJwP66NSOUdIzLyz2lBwUm_Lx617WNpzVjwi1Ta2R4POZlpPy-be61hX1Y93Q86-k28_hBv-=w461-h175-no "output1")](https://lh3.googleusercontent.com/Tcb0-1VEX_8yinnFj5vR-EHK2Xgm7Z-7CBvh10qmePnLq53-8mXX8uPJe-q4cBn7QN1dFffEmXPulYbgJHBJs2e1wjYwmwTKB4uUaCGNnewt003H4ekmzH8PQVoCkJb7gVaA49CEe4YOr5_cL0F8jUHK_q-_17U3dYjGZCPbmB2knzwRacz6-qZIdaTxzKzPBycWhCxotQ-nETxgKgiDdYR5o85kDidn5YEiauGxKd-aiuKqc5q_sBhnnsyeHsoXFI_blJn83oYtdLQ4TazHnhdBMHJmeFsSRSshRTYrh1FLeJBZcpAXSbRk55eYvpId7MDIqNKytlsG19EFWgIBu1BpRda4v7mcZs_UZxjs7FhjTslLOgheTpiG-246kIqSA8x7RiXUEtGNRUNkuBz6Zink5ntIiVLJP08JMAd0b8O2XvWy2s_lw5s7gnNUU35E_utwL_5G0URtCtza5PAwWOd0NpGU_kIfS7EknAn-9YHCbH5yAx24ZF-Oclcyt3rkfWt6xUeDmTVemAqIDhHa_LD1PFRcpXf9K3cdq7PB93DUAwPCWOMSoL30dlbCGyt80875-Q1-xTgvVx8VodcamluMJ6L33Dt1XYsTPuL_uneRJCdnuJwP66NSOUdIzLyz2lBwUm_Lx617WNpzVjwi1Ta2R4POZlpPy-be61hX1Y93Q86-k28_hBv-=w461-h175-no "output1")

Basic Modal

[![Basic Modal](https://lh3.googleusercontent.com/vbAe0Gx1kvNxgK4vrAwDOdzDossADWlkHTQgATXnDFpY5_yZbHzhyr-japXbTIk7t1CZRFnOONuDESDyiuYMfRS8xUrIbpZ3IzDR1KO9wQrwYWVzJ3XhXMP8FsZ_2PkqQvKmXJvl7NO12UFx0gyDCfrrOmCSpNi-Mc8QNitcjGNtBkxDETL7hqfI6LWWkVxoB3ZoD4ZI4aiHSLU9JDgbV8Eu3YxfEO4kz3MInRTWfLD1VptUYQEpc_prGuCMpWQ5NTOsSiNcj77S2KobvfWDTDsNMrQjFFygZhOm9Ie8ObW5UWG2hsNeBzb3kh9xBkL3_5LuknmWXrkyAFRCRGyK5J8Fd42ldrvwb5HzpAQ-f1uxEcXBDnTbfyopiqf0eTPSpJjqf2tFDa9P8mjVDwcKUon9U4EesOzBJV_c9v2u0xc5C_0jDtfKlxrtJLfy0ltN1rdKOoEreEY-DfgjwBfvOeUsu1Za_fuPpeThJaUla2Ds82Ur0xFj8-qYFKkyEplE9fgG8WN4vN6pYfjObNsIpEtOUR3KH9gfkXoV1JsuFUSNawZZ7Z-6mt83vIF76RyQz4xTtgNsJdwzFYjH91T4jSQCgWPaIn1rDtsS3Zc0qfo9Gpg31zxETVcmIEheW3jArlswHzHrzxKhKTZ97KCjeOHDe5nEXF_pvNjDN-MHEZ4cU3Gd8pv4jm6m=w1758-h943-no "Basic Modal")](https://lh3.googleusercontent.com/vbAe0Gx1kvNxgK4vrAwDOdzDossADWlkHTQgATXnDFpY5_yZbHzhyr-japXbTIk7t1CZRFnOONuDESDyiuYMfRS8xUrIbpZ3IzDR1KO9wQrwYWVzJ3XhXMP8FsZ_2PkqQvKmXJvl7NO12UFx0gyDCfrrOmCSpNi-Mc8QNitcjGNtBkxDETL7hqfI6LWWkVxoB3ZoD4ZI4aiHSLU9JDgbV8Eu3YxfEO4kz3MInRTWfLD1VptUYQEpc_prGuCMpWQ5NTOsSiNcj77S2KobvfWDTDsNMrQjFFygZhOm9Ie8ObW5UWG2hsNeBzb3kh9xBkL3_5LuknmWXrkyAFRCRGyK5J8Fd42ldrvwb5HzpAQ-f1uxEcXBDnTbfyopiqf0eTPSpJjqf2tFDa9P8mjVDwcKUon9U4EesOzBJV_c9v2u0xc5C_0jDtfKlxrtJLfy0ltN1rdKOoEreEY-DfgjwBfvOeUsu1Za_fuPpeThJaUla2Ds82Ur0xFj8-qYFKkyEplE9fgG8WN4vN6pYfjObNsIpEtOUR3KH9gfkXoV1JsuFUSNawZZ7Z-6mt83vIF76RyQz4xTtgNsJdwzFYjH91T4jSQCgWPaIn1rDtsS3Zc0qfo9Gpg31zxETVcmIEheW3jArlswHzHrzxKhKTZ97KCjeOHDe5nEXF_pvNjDN-MHEZ4cU3Gd8pv4jm6m=w1758-h943-no "Basic Modal")

Confirmation Modal
[![Confirmation Modal](https://lh3.googleusercontent.com/k2AOJviRmCJSFJBqrVGwY1v8nCXuYrKCoaAj_-03Rky7PRsEIEWtngdph2RQqpMRofpttrOIQYHfZKs-aCE7Lqf8joYeaw7mYTU9UWMHA1d9jrUNEYT85NITrOG80L8_jrb7ALLFy2pZcfGvj4QnLQYAHOF5kTHIaGuBCRwD7Z40jYNzXZYqjZ_IAOUkL9qKFzJ77bsmAH6Gl5fC6T_PfcQQE3zYvyIzFgdbpwB9AoXzjT-Us8dcd2wLNGl3oD97lGrN1kyJ3OmfW3tj0DHXLfwOjBuZnlW-oDh6J6y02kTsKagu9PQB6CpvpKV2x5nqMoDugf5yUR7JW6aijYkSpdoVO0_vWovAsH2ucWcpdzoSVQpasDoO9S3f1vj37sjQcnRp6FqGd4ylDc_-XZkR2-Z0BnFRuQkLzEKxiq6j6X4kQzhXdGW2Gw3kA34DRBtoxcr-RedxecMoGwAc_WN-LPBAXJo1acP8rQ4Bvq2cPbPbu3Bt_gufsEu_haxJRkopnQVpgdPspjhsE9wdJkeuQvyewCyxCsvJ0kGWBTnByvj2HB9HdlP6wlimVtxQE61QPNa_1YM0-7TtMBNnZ0sAyYvmQv3UxzUxxjeRN9THLp5QnoEQyiEkLOA9v5NLiPx7m43N01u2Q9rbFvENwZXx5IOBGo0IB-DVi7HuQHJbAP1ohmdZNbAZPQKO=w1758-h943-no "Confirmation Modal")](https://lh3.googleusercontent.com/k2AOJviRmCJSFJBqrVGwY1v8nCXuYrKCoaAj_-03Rky7PRsEIEWtngdph2RQqpMRofpttrOIQYHfZKs-aCE7Lqf8joYeaw7mYTU9UWMHA1d9jrUNEYT85NITrOG80L8_jrb7ALLFy2pZcfGvj4QnLQYAHOF5kTHIaGuBCRwD7Z40jYNzXZYqjZ_IAOUkL9qKFzJ77bsmAH6Gl5fC6T_PfcQQE3zYvyIzFgdbpwB9AoXzjT-Us8dcd2wLNGl3oD97lGrN1kyJ3OmfW3tj0DHXLfwOjBuZnlW-oDh6J6y02kTsKagu9PQB6CpvpKV2x5nqMoDugf5yUR7JW6aijYkSpdoVO0_vWovAsH2ucWcpdzoSVQpasDoO9S3f1vj37sjQcnRp6FqGd4ylDc_-XZkR2-Z0BnFRuQkLzEKxiq6j6X4kQzhXdGW2Gw3kA34DRBtoxcr-RedxecMoGwAc_WN-LPBAXJo1acP8rQ4Bvq2cPbPbu3Bt_gufsEu_haxJRkopnQVpgdPspjhsE9wdJkeuQvyewCyxCsvJ0kGWBTnByvj2HB9HdlP6wlimVtxQE61QPNa_1YM0-7TtMBNnZ0sAyYvmQv3UxzUxxjeRN9THLp5QnoEQyiEkLOA9v5NLiPx7m43N01u2Q9rbFvENwZXx5IOBGo0IB-DVi7HuQHJbAP1ohmdZNbAZPQKO=w1758-h943-no "Confirmation Modal")

Alert Modal
[![Alert Modal](https://lh3.googleusercontent.com/jhTH-NpSRuI3Xt2Rf4pdo4VnMjcRBYGyYov_LroJ7oqc4G0nf7S78tumOglm-9AA8WqNhZG2XCWZe-n8tQzjVgkxEGhJxx0qiQrqfcWaEPRGp0pXF5dMK-_HYmvvzOyjw9ghBftagTS_vwQkMiqUTOAbWw9oHqnJ2RFQEfHxbzQO1nlUPC0kCWCFPjAml13cCPkf3R1U71arPaWZCRJMalbaT26MZEae17fdlK2dEE5Gu1G7AebMJIk-9bGJOrc-qmvquxJFWI2tvVhkdwFIZOb9DCcoybe5GTzuLCzvb0Gff5D3ntQN0JX4BuodctDCheE-4q9t0EQ3RblefowMsSWx-ERiuPFWmRaGnHLzhMnyqL2DZc29YBYwjmsoaC07Ug5D648fohRXM01r33BPaor3kGc7qqKsiHktcE_hvVy3XJfKlNnXAHeLiJOrO8X9zuMquIzp4gZvMrsabGEO5OryPTbGbzas08DUrJZNS7Q8a71u3hFe9E7PmWwktGPPnLYjqxkfVpgbtiq0ywxhlQM3Wuuo8zL4PvEzwvLq_vh16NuOC_QUN4RZHA340OW2MhekExcRtiJ15SOCC0H_CLe_ckYAtJxB0Wj8u1N7y5SfjQXpEl6igOfoMQhfaRF_mtDW0O-ThVUECjqPuZRKZVBRKzuqP8a-heqanNNLjHVdaZhqQetgLs1M=w1758-h943-no "Alert Modal")](https://lh3.googleusercontent.com/jhTH-NpSRuI3Xt2Rf4pdo4VnMjcRBYGyYov_LroJ7oqc4G0nf7S78tumOglm-9AA8WqNhZG2XCWZe-n8tQzjVgkxEGhJxx0qiQrqfcWaEPRGp0pXF5dMK-_HYmvvzOyjw9ghBftagTS_vwQkMiqUTOAbWw9oHqnJ2RFQEfHxbzQO1nlUPC0kCWCFPjAml13cCPkf3R1U71arPaWZCRJMalbaT26MZEae17fdlK2dEE5Gu1G7AebMJIk-9bGJOrc-qmvquxJFWI2tvVhkdwFIZOb9DCcoybe5GTzuLCzvb0Gff5D3ntQN0JX4BuodctDCheE-4q9t0EQ3RblefowMsSWx-ERiuPFWmRaGnHLzhMnyqL2DZc29YBYwjmsoaC07Ug5D648fohRXM01r33BPaor3kGc7qqKsiHktcE_hvVy3XJfKlNnXAHeLiJOrO8X9zuMquIzp4gZvMrsabGEO5OryPTbGbzas08DUrJZNS7Q8a71u3hFe9E7PmWwktGPPnLYjqxkfVpgbtiq0ywxhlQM3Wuuo8zL4PvEzwvLq_vh16NuOC_QUN4RZHA340OW2MhekExcRtiJ15SOCC0H_CLe_ckYAtJxB0Wj8u1N7y5SfjQXpEl6igOfoMQhfaRF_mtDW0O-ThVUECjqPuZRKZVBRKzuqP8a-heqanNNLjHVdaZhqQetgLs1M=w1758-h943-no "Alert Modal")

### Modal Properties


| Name  |Type   |Default   | Description  |
| ------------ | ------------ | ------------ | ------------ |
| title  | String, Number and HTML(DOM) String  |   | Displays title in the modal header  |
| body  |  String, Number and HTML(DOM) String |   |  Displays content in the modal body  |
|size   |  xl/lg/xs/sm/  | lg   |  Renders the size of the modal as  xl/lg/xs/sm  |
| headerClass  | String   |   |  Customizable class to be applied on modal header |
| bodyClass  |  String  |   |  Customizable class to be applied on modal body |
| modalClass  |  String  |   |  Customizable class to be applied on modal |
| isAnimate  |  Boolean  |  true  | A Modal can also be animated. For that set the "animation" prop to false/true.  |
| buttons  | Array of objects  |   | Represents button in modal footer  |
| onHide  |  Function |   | Fired(Triggered) when modal hides |