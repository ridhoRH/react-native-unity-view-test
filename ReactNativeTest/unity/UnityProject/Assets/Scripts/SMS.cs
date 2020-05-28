using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SMS : MonoBehaviour
{
    public GameObject model;
    public Text bundleId;

    void Awake()
    {
        UnityMessageManager.Instance.OnMessage += toggleRotate;
    }

    void onDestroy()
    {
        UnityMessageManager.Instance.OnMessage -= toggleRotate;
    }

    private void Update()
    {
        //bundleId.text = Application.identifier;
    }

    void toggleRotate(string message)
    {
        Debug.Log("onMessage:" + message);
        model.SetActive(!model.activeSelf);
    }
}
